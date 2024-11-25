import { getEventAvailability, getEventDetails } from "@/actions/events";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import EventDetails from "./_components/event-details";
import BookingForm from "./_components/booking-form";

export async function generateMetadata({ params }: { params: { username: string; eventId: string } }) {
  const event = await getEventDetails(params.username, params.eventId);
  if (!event) {
    return {
      title: "Event not found",
      description: "The Event you are looking for does not exist",
    };
  }

  return {
    title: `Book ${event.title} with ${event.user.name} | Schedura`,
    description: `Schedule a ${event.duration} minute ${event.title} event with ${event.user.name}.`,
  };
}

const EventPage = async ({ params }: { params: { username: string; eventId: string } }) => {
  const { username, eventId } = params;
  const event = await getEventDetails(username, eventId);
  const availability = await getEventAvailability(eventId);

  if (!event) {
    notFound();
  }
  return (
    <div className="flex flex-col justify-center lg:flex-row px-4 py-8">
      <EventDetails event={event} />
      <Suspense fallback={<div>Loading Booking Form..</div>}>
        <BookingForm event={event} availability={availability} />
      </Suspense>
    </div>
  );
};

export default EventPage;
