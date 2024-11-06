import { z } from "zod";

export const CreateProductSchema = z.object({
  name: z.string().toLowerCase().trim().min(3),
  description: z.string().min(1),
  price: z.number(),
  category_id: z.string().min(1),
});

export const DeleteProductSchema = z.object({
  id: z.string().min(1),
});
