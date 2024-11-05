import { z } from "zod";

export const CraeteProductSchema = z.object({
  name: z
    .string()
    .toLowerCase()
    .trim()
    .min(3, { message: "O nome deve conter no mínimo 3 caracteres" }),
  category_id: z.string({
    message: "O campo categoria do produto é obrigatório",
  }),
  description: z.string({ message: "O campo descrição é obrigatório" }),
  price: z.coerce.number({ message: "O campo preço é obrigatório" }),
});
