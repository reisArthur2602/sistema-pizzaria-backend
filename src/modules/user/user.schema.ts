import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z
    .string({ message: "O campo email é obrigatório" })
    .min(1)
    .trim()
    .email("Insira um formato de email válido"),
  password: z.string({ message: "o campo senha é obrigatório" }).min(6, {
    message: "o campo senha deve conter pelo menos 6 caracteres",
  }),
});
export const SessionUserSchema = z.object({
  email: z
    .string({ message: "O campo email é obrigatório" })
    .min(1)
    .trim()
    .email("Insira um formato de email válido"),
  password: z.string({ message: "o campo senha é obrigatório" }).min(6, {
    message: "o campo senha deve conter pelo menos 6 caracteres",
  }),
});
