import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { UploadedFile } from "express-fileupload";
import { BadRequestError } from "../helpers/errors";
import { GENERAL_MESSAGES } from "../helpers/general-messages";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

class CloudinaryService {
  async uploadImage(file: UploadedFile): Promise<string> {
    try {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "products",
              resource_type: "image",
            },
            (error, result) => {
              if (error) {
                reject(
                  new BadRequestError(GENERAL_MESSAGES.IMAGE_UPLOAD_ERROR)
                );
              } else {
                resolve(result);
              }
            }
          )
          .end(file.data);
      });

      return (result as UploadApiResponse).secure_url;
    } catch (error) {
      throw new BadRequestError(GENERAL_MESSAGES.IMAGE_UPLOAD_ERROR);
    }
  }

  extractPublicId(imageUrl: string): string {
    const regex = /\/v\d+\/(.*)\./;
    const match = imageUrl.match(regex);

    if (match && match[1]) {
      return match[1];
    }

    throw new BadRequestError(GENERAL_MESSAGES.IMAGE_DELETE_ERROR);
  }

  async deleteImage(publicId: string): Promise<void> {
    try {
      await cloudinary.api.delete_resources([publicId], {
        type: "upload",
        resource_type: "image",
      });
    } catch (error) {
      throw new BadRequestError(GENERAL_MESSAGES.IMAGE_DELETE_ERROR);
    }
  }
}

export default new CloudinaryService();
