import { OrderStatus } from "@prisma/client";
import { z } from "zod";

export const CreateOrderSchema = z.object({
  table: z.number(),
});

export const DeleteOrderSchema = z.object({
  id: z.string().min(1),
});

export const UpdateOrderSchema = z.object({
  id: z.string().min(1),
  status: z.nativeEnum(OrderStatus),
});

export const ShowOrderSchema = z.object({
  id: z.string().min(1),
});

export const FilterOrderSchema = z.object({
  status: z.nativeEnum(OrderStatus).optional(),
});
