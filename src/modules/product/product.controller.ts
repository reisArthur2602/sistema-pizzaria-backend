
import { Request, Response } from "express";
import { CreateProductService } from "./services/create-product.services";
import { BadRequestError } from "../../shared/helpers/errors";
import { ListProductService } from "./services/list-product.services";
import { DeleteProductService } from "./services/delete-product.services";
import { CreateProductSchema } from "./product.schema";
import { GENERAL_MESSAGES } from "../../shared/helpers/general-messages";
import { DeleteCategorySchema } from "../category/category.schema";

export class ProductController {
  async create(req: Request, res: Response) {
    const { success, data } = CreateProductSchema.safeParse(req.body);

    const image_url = req.file?.filename;

    if (!success || !image_url)
      throw new BadRequestError(GENERAL_MESSAGES.FILL_DATA_ERROR);

    const createProduct = new CreateProductService();

    await createProduct.execute({ ...data, image_url });

    res.status(204).json();
  }

  async list(req: Request, res: Response) {
    const listProduct = new ListProductService();

    const products = await listProduct.execute();

    res.status(200).json(products);
  }

  async delete(req: Request, res: Response) {
    const { success, data } = DeleteCategorySchema.safeParse(req.query);

    if (!success) throw new BadRequestError(GENERAL_MESSAGES.FILL_DATA_ERROR);

    const deleteProduct = new DeleteProductService();

    await deleteProduct.execute(data.id);

    res.status(204).json();
  }
}
