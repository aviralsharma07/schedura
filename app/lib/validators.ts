import { z } from "zod";

export const userNameSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/, "Username accepts only letters, numbers, and underscores"),
});
