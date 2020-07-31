import express from "express";

class StorageController {
    async saveImage(req: express.Request, res: express.Response){
        res.json({ filesData: req.files });
    }
}

export default new StorageController();