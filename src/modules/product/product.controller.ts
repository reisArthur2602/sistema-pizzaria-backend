import { Request, Response } from "express";
import { CreateProductService } from "./services/create-product.services";
import { BadRequestError } from "../../shared/helpers/errors";
import { ListProductService } from "./services/list-product.services";
import { DeleteProductService } from "./services/delete-product.services";
import { CreateProductSchema } from "./product.schema";
import { GENERAL_MESSAGES } from "../../shared/helpers/general-messages";
import { DeleteCategorySchema } from "../category/category.schema";
import { UploadedFile } from "express-fileupload";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
export class ProductController {
  async create(req: Request, res: Response) {
    const body = CreateProductSchema.parse(req.body);

    if (!req.files) throw new BadRequestError(GENERAL_MESSAGES.FILL_DATA_ERROR);

    const file = req.files["file"] as UploadedFile;

    const resultSendImageToStorage = await new Promise<UploadApiResponse>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream({}, (error, result) => {
            if (error) {
              reject(new BadRequestError(GENERAL_MESSAGES.IMAGE_UPLOAD_ERROR));
              return;
            }
            resolve(result as UploadApiResponse);
          })
          .end(file.data);
      }
    );

    const createProduct = new CreateProductService();

    await createProduct.execute({
      ...body,
      image_url: resultSendImageToStorage.url,
    });

    res.status(204).json();
  }

  async list(req: Request, res: Response) {
    const listProduct = new ListProductService();

    const products = await listProduct.execute();

    res.status(200).json(products);
  }

  async delete(req: Request, res: Response) {
    const query = DeleteCategorySchema.parse(req.query);

    const deleteProduct = new DeleteProductService();

    await deleteProduct.execute(query.id);

    res.status(204).json();
  }
}
