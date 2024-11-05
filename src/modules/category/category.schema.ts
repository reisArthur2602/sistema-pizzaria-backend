import { z } from "zod";

export const CreateCategorySchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome da categoria deve conter no mínimo 3 caracteres" })
    .toLowerCase()
    .trim(),
});
