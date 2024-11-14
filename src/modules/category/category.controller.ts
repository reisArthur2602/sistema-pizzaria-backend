import { Request, Response } from "express";

import { CreateCategoryService } from "./services/create-category.services";
import { ListCategoryService } from "./services/list-category.services";
import { DeleteCategoryService } from "./services/delete-category.services";
import {
  CreateCategorySchema,
  DeleteCategorySchema,
  EditCategorySchema,
} from "./category.schema";

import { EditCategoryService } from "./services/edit-category.services";

export class CategoryController {
  async create(req: Request, res: Response) {
    const body = CreateCategorySchema.parse(req.body);

    const createCategory = new CreateCategoryService();

    await createCategory.execute(body.name);

    res.status(204).json();
  }

  async list(req: Request, res: Response) {
    const listCategory = new ListCategoryService();

    const categories = await listCategory.execute();

    res.status(200).json(categories);
  }

  async delete(req: Request, res: Response) {
    const query = DeleteCategorySchema.parse(req.query);

    const deleteCategory = new DeleteCategoryService();

    await deleteCategory.execute(query.id);

    res.status(204).json();
  }

  async edit(req: Request, res: Response) {
    const body = EditCategorySchema.parse(req.body);

    const editCategory = new EditCategoryService();

    await editCategory.execute(body.id, body.name);

    res.status(204).json();
  }
}
