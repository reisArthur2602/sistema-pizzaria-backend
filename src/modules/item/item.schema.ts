import { z } from "zod";

export const CreateItemSchema = z.object({
  order_id: z.string().min(1),
  product_id: z.string().min(1),
  quantity: z.coerce.number(),
});

export const RemoveItemSchema = z.object({
  id: z.string().min(1),
});
