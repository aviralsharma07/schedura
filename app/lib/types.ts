import { z } from "zod";
import { availabilitySchema } from "./validators";

export type AvailabilityFormValues = z.infer<typeof availabilitySchema>;
