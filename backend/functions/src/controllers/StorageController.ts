import express from "express";
import storageService from "../services/storage";

class StorageController {
    async saveImage(req: express.Request, res: express.Response){
        // @ts-ignore
        const files = req.files as any;
        const file = files[0];

        const response = await storageService.saveImage(file.buffer, file.originalname, file.mimetype);
        res.json({ filesData: response });
    }
}

export { StorageController };