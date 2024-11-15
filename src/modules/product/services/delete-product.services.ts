import { NotFoundError } from "../../../shared/helpers/errors";
import { PRODUCT_MESSAGES } from "../product.message";

import { ProductRepository } from "../product.repository";
import { IProductRepository } from "../product.types";

import CloudinaryServices from "../../../shared/config/cloudinary";

export class DeleteProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }
  private productRepository: IProductRepository;

  async execute(id: string): Promise<void> {
    const hasProductWithId = await this.productRepository.findById(id);

    if (!hasProductWithId) {
      throw new NotFoundError(PRODUCT_MESSAGES.PRODUCT_NOT_FOUND);
    }
    const cloudinary_id = CloudinaryServices.extractPublicId(
      hasProductWithId.image_url
    );

    await CloudinaryServices.deleteImage(cloudinary_id);
    await this.productRepository.delete(id);
  }
}
