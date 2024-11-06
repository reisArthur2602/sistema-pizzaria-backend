import { z } from "zod";

export const CreateOrderSchema = z.object({
  table: z.number(),
});

export const DeleteOrderSchema = z.object({
  id: z.string().min(1),
});

export const SendOrderSchema = z.object({
  id: z.string().min(1),
});

export const FinishOrderSchema = z.object({
  id: z.string().min(1),
});

export const ShowOrderSchema = z.object({
  id: z.string().min(1),
});
