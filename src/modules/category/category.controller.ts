import { Request, Response } from "express";

import { CreateCategoryService } from "./services/create-category.services";
import { ListCategoryService } from "./services/list-category.services";
import { DeleteCategoryService } from "./services/delete-category.services";
import { CreateCategorySchema } from "./category.schema";

export class CategoryController {
  async create(req: Request, res: Response) {
    const { name } = CreateCategorySchema.parse(req.body);

    const createCategory = new CreateCategoryService();

    await createCategory.execute(name);

    res.status(201).send({});
  }

  async list(req: Request, res: Response) {
    const listCategory = new ListCategoryService();

    const categories = await listCategory.execute();

    res.status(200).json(categories);
  }

  async delete(req: Request, res: Response) {
    const id = req.query.id as string;

    const deleteCategory = new DeleteCategoryService();

    await deleteCategory.execute(id);

    res.status(200).json({});
  }
}
