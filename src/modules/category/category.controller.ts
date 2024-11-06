import { Request, Response } from "express";

import { CreateCategoryService } from "./services/create-category.services";
import { ListCategoryService } from "./services/list-category.services";
import { DeleteCategoryService } from "./services/delete-category.services";
import { CreateCategorySchema, DeleteCategorySchema } from "./category.schema";
import { GENERAL_MESSAGES } from "../../shared/helpers/general-messages";
import { BadRequestError } from "../../shared/helpers/errors";

export class CategoryController {
  async create(req: Request, res: Response) {
    const { success, data } = CreateCategorySchema.safeParse(req.body);

    if (!success) throw new BadRequestError(GENERAL_MESSAGES.FILL_DATA_ERROR);

    const createCategory = new CreateCategoryService();

    await createCategory.execute(data.name);

    res.status(204).json();
  }

  async list(req: Request, res: Response) {
    const listCategory = new ListCategoryService();

    const categories = await listCategory.execute();

    res.status(200).json(categories);
  }

  async delete(req: Request, res: Response) {
    const { success, data } = DeleteCategorySchema.safeParse(req.query);
    
    if (!success) throw new BadRequestError(GENERAL_MESSAGES.FILL_DATA_ERROR);

    const deleteCategory = new DeleteCategoryService();

    await deleteCategory.execute(data.id);

    res.status(204).json();
  }
}
