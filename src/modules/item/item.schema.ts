import { z } from "zod";

export const CreateItemSchema = z.object({
  order_id: z
    .string()
    .min(1, { message: "O campo id do pedido é obrigatório" }),
  product_id: z
    .string()
    .min(1, { message: "O campo id do produto é obrigatório" }),
  quantity: z.coerce.number(),
});
