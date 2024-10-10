import { Request, Response } from "express";
import { z } from "zod";
import { CreateCategoryService } from "../services/CreateCategoryService";

export class CategoryController {
  async create(req: Request, res: Response) {
    const { name } = z
      .object({
        name: z
          .string({ message: "O campo nome é obrigatório" })
          .toLowerCase()
          .min(3, { message: "O nome deve conter pelo menos 3 caracteres" }),
      })
      .parse(req.body);

    const createCategory = new CreateCategoryService();

    await createCategory.execute(name);

    res.status(201).send({});
  }
}
