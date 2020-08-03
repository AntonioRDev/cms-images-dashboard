import cloudinary, {
  UploadApiErrorResponse,
  UploadApiResponse,
} from "cloudinary";
import { cloudinaryConfig } from "../config/cloudinary";

class StorageService {
  constructor() {
    cloudinary.v2.config(cloudinaryConfig);
  }

  async saveImage(
    bufferData: any,
    originalname: string,
    mimetype: string
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    try {
      const imageBase64 = bufferData.toString("base64");
      const imageDataFormatted = `data:${mimetype};base64,${imageBase64}`;
      const cloudinaryResponse = await cloudinary.v2.uploader.upload(
        imageDataFormatted
      );

      return cloudinaryResponse;
    } catch (error) {
      console.log("saveImage error", error);
      return error;
    }
  }
}

export default new StorageService();
