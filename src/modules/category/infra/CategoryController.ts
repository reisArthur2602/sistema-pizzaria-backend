import { Request, Response } from "express";
import { z } from "zod";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { ListCategoryService } from "../services/ListCategoriesService";

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

  async list(req: Request, res: Response) {
    const listCategory = new ListCategoryService();

    const categories = await listCategory.execute();

    res.status(200).json(categories);
  }
}
