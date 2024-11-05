import { z } from "zod";
import { Request, Response } from "express";
import { CreateProductService } from "./services/create-product.services";
import { BadRequestError } from "../../shared/helpers/errors";
import { ListProductService } from "./services/list-product.services";
import { DeleteProductService } from "./services/delete-product.services";
import { CraeteProductSchema } from "./product.schema";

export class ProductController {
  async create(req: Request, res: Response) {
    const body = CraeteProductSchema.parse(req.body);

    if (!req.file) {
      throw new BadRequestError("A imagem do produto é obrigatória");
    }

    const createProduct = new CreateProductService();

    await createProduct.execute({ ...body, image_url: req.file.filename });

    res.status(201).send({});
  }

  async list(req: Request, res: Response) {
    const listProduct = new ListProductService();

    const products = await listProduct.execute();

    res.status(200).send(products);
  }

  async delete(req: Request, res: Response) {
    const id = req.query.id as string;
    const deleteProduct = new DeleteProductService();
    const products = await deleteProduct.execute(id);

    res.status(200).send({ products });
  }
}
