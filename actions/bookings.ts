"use server";
import { db } from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";
import { google } from "googleapis";

interface BookingData {
  eventId: string;
  name: string;
  email: string;
  startTime: string;
  endTime: string;
  additionalInfo: string;
}

export async function createBooking(bookingData: BookingData) {
  try {
    const event = await db.event.findUnique({
      where: { id: bookingData.eventId },
      include: { user: true },
    });

    if (!event) {
      throw new Error("Event not found");
    }

    //* use google calendar api to generate meet links and add to calendar
    const response = await clerkClient.users.getUserOauthAccessToken(event.user.clerkUserId, "oauth_google");
    const { data } = response;
    const token = data[0]?.token;

    if (!token) {
      throw new Error("User has not connected their Google account");
    }

    // SetUp our Google OAuth Client
    const Oauth2Client = new google.auth.OAuth2();
    Oauth2Client.setCredentials({ access_token: token });

    const calendar = google.calendar({ version: "v3", auth: Oauth2Client });

    const meetResponse = await calendar.events.insert({
      calendarId: "primary",
      conferenceDataVersion: 1,
      requestBody: {
        summary: `${bookingData.name} - $s{event.title}`,
        description: bookingData.additionalInfo,
        start: { dateTime: bookingData.startTime },
        end: { dateTime: bookingData.endTime },
        attendees: [{ email: bookingData.email }, { email: event.user.email }],
        conferenceData: {
          createRequest: { requestId: `${event.id}-${Date.now()}` },
        },
      },
    });

    const meetLink = meetResponse.data.hangoutLink as string;
    const googleEventId = meetResponse.data.id as string;

    const booking = await db.booking.create({
      data: {
        eventId: event.id,
        userId: event.userId,
        name: bookingData.name,
        email: bookingData.email,
        startTime: bookingData.startTime,
        endTime: bookingData.endTime,
        additionalInfo: bookingData.additionalInfo,
        meetLink,
        googleEventId,
      },
    });

    return { success: true, booking, meetLink };
  } catch (error) {
    console.error("Error creating booking: ", error);
    return { success: false, error: (error as Error).message };
  }
}
