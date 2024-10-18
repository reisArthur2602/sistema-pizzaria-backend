import { z } from "zod";
import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";
import { BadRequestError } from "../../../shared/helpers/errors";
import { ListProductService } from "../services/ListProductService";
import { DeleteProductService } from "../services/DeleteProductService";

export class ProductController {
  async create(req: Request, res: Response) {
    const body = z
      .object({
        name: z
          .string({ message: "O campo nome é obrigatório" })
          .toLowerCase()
          .trim()
          .min(3, { message: "O nome deve conter pelo menos 3 caracteres" }),
        category_id: z.string({
          message: "O campo categoria do produto é obrigatório",
        }),
        description: z.string({ message: "O campo descrição é obrigatório" }),
        price: z.coerce.number({ message: "O campo preço é obrigatório" }),
      })
      .parse(req.body);

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
    const deleteProduct = new DeleteProductService();
    const id = req.query.id as string;
    const products = await deleteProduct.execute(id);

    res.status(200).send({ products });
  }
}
