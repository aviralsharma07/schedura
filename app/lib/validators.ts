import { z } from "zod";

export const userNameSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/, "Username accepts only letters, numbers, and underscores"),
});

export const eventSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title must be 100 characters or less"),
  description: z.string().min(1, "Description is required").max(500, "Description must be 500 characters or less"),
  duration: z.number().int().positive("Duration must be a positive number"),
  isPrivate: z.boolean(),
});

export const daysSchema = z
  .object({
    isAvailable: z.boolean(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.isAvailable) {
        return data.startTime! < data.endTime!;
      }
      return true;
    },
    {
      message: "End time must be more than start time",
      path: ["endTime"],
    }
  );

export const availabilitySchema = z.object({
  monday: daysSchema,
  tuesday: daysSchema,
  wednesday: daysSchema,
  thursday: daysSchema,
  friday: daysSchema,
  saturday: daysSchema,
  sunday: daysSchema,
  timeGap: z.number().min(0, "Time gap must be 0 or more minutes").int(),
});
