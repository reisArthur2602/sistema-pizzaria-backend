import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string().min(1).trim().email(),
  password: z.string().min(6),
});

export const SessionUserSchema = z.object({
  email: z.string().min(1).trim().email(),
  password: z.string().min(6),
});

