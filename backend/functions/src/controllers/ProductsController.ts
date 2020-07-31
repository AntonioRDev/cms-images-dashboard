import express from "express";

class ProductController {
    async products(req: express.Request, res: express.Response){
        res.json({ ok: "products" });
    }

    async updateProduct(req: express.Request, res: express.Response){
        res.json({ ok: "updateProduct" });
    }

    async saveProduct(req: express.Request, res: express.Response){
        res.json({ ok: "saveProduct" });
    }
    
    async deleteProduct(req: express.Request, res: express.Response){
        res.json({ ok: "deleteProduct" });
    }
}

export default new ProductController();