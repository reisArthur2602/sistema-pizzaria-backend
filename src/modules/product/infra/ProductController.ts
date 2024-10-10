import { z } from "zod";
import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";

export class ProductController {
  async create(req: Request, res: Response) {
    const body = z
      .object({
        name: z
          .string({ message: "O campo nome é obrigatório" })
          .toLowerCase()
          .min(3, { message: "O nome deve conter pelo menos 3 caracteres" }),
        category_id: z.string({
          message: "O campo categoria do produto é obrigatório",
        }),
        description: z.string({ message: "O campo descrição é obrigatório" }),
        price: z.number({ message: "O campo preço é obrigatório" }),
        image_url: z.string({ message: "A imagem do produto é obrigatória" }),
      })
      .parse(req.body);

    const createProduct = new CreateProductService();
    
    await createProduct.execute(body);

    res.status(201).send({});
  }
}
