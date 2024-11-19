"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { DAYS_OF_WEEK } from "@/app/lib/constants";
import { AvailabilityFormValues } from "@/app/lib/types";
import { DayOfWeek } from "@prisma/client";

export async function getUserAvailability() {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized Access");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: {
      availability: {
        include: { days: true },
      },
    },
  });

  if (!user || !user.availability) {
    return null;
  }

  // const availabilityData = {
  //   timeGap: user.availability.timeGap,
  // }[("monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday")].forEach((day) => {
  //   const dayAvailability = user.availability.days.find((d) => d.days === day.toUpperCase());

  //   availabilityData[day] = {
  //     isAvailable: !!dayAvailability,
  //     startTime: dayAvailability ? dayAvailability.startTime.toISOString().slice(11, 16) : "09:00",
  //     endTime: dayAvailability ? dayAvailability.endTime.toISOString().slice(11, 16) : "17:00",
  //   };
  // });

  // return availabilityData;

  // Initialize availabilityData
  const availabilityData: Record<string, { isAvailable: boolean; startTime: string; endTime: string } | undefined> = {};
  DAYS_OF_WEEK.forEach((day) => {
    const dayAvailability = user?.availability?.days.find((d) => d.day === day.toUpperCase());

    availabilityData[day] = {
      isAvailable: !!dayAvailability,
      startTime: dayAvailability ? dayAvailability.startTime.toISOString().slice(11, 16) : "09:00",
      endTime: dayAvailability ? dayAvailability.endTime.toISOString().slice(11, 16) : "17:00",
    };
  });

  return {
    timeGap: user.availability.timeGap,
    ...availabilityData,
  } as AvailabilityFormValues;
}

export async function updateUserAvailability(data: AvailabilityFormValues) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized Access");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: {
      availability: true,
    },
  });

  if (!user) {
    return "User not found";
  }

  const availabilityData = Object.entries(data).flatMap(([day, value]) => {
    const { isAvailable, startTime, endTime } = value as { isAvailable: boolean; startTime: string; endTime: string };
    if (isAvailable) {
      const baseDate = new Date().toISOString().split("T")[0];
      return [
        {
          day: day.toUpperCase() as DayOfWeek,
          startTime: new Date(`${baseDate}T${startTime}`),
          endTime: new Date(`${baseDate}T${endTime}`),
        },
      ];
    }

    return [];
  });

  if (user.availability) {
    await db.availability.update({
      where: { id: user.availability.id },
      data: {
        timeGap: data.timeGap,
        days: {
          deleteMany: {},
          create: availabilityData,
        },
      },
    });
  } else {
    await db.availability.create({
      data: {
        userId: user.id,
        timeGap: data.timeGap,
        days: {
          create: availabilityData,
        },
      },
    });
  }

  return { success: true };
}
