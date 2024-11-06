import { z } from "zod";

export const CreateCategorySchema = z.object({
  name: z.string().min(3).toLowerCase().trim(),
});

export const EditCategorySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(3).toLowerCase().trim(),
});

export const DeleteCategorySchema = z.object({
  id: z.string().min(1),
});
