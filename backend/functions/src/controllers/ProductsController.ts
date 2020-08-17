import express from "express";
import ProductService from "../services/products";
import { ProductCreation } from "../models/DTOs/ProductCreation";
class ProductsController {
    async products(req: express.Request, res: express.Response){
        const response = ProductService.getProducts();
        res.status(200).json(response);
    }

    async updateProduct(req: express.Request, res: express.Response){
        const id = req.params.id;

        if(id){
            const response = ProductService.updateProduct(id);
            res.status(201).json(response);
        } else {
            console.log("updateProduct - Missing or invalid id");
            res.status(400).json({ message: "Missing or invalid id"});
        }
    }

    async saveProduct(req: express.Request, res: express.Response){
        const body = req.body as ProductCreation;

        if(body){
            const response = ProductService.saveProduct(body);
            res.status(201).json(response);
        } else {
            console.log("saveProduct - Missing params");
            res.status(400).json({ message: "Missing params"});
        }
    }
    
    async deleteProduct(req: express.Request, res: express.Response){
        const id = req.params.id;

        if(id){
            const response = ProductService.deleteProduct(id);
            res.status(201).json(response);
        } else {
            console.log("deleteProduct - Missing or invalid id");
            res.status(400).json({ message: "Missing or invalid id"});
        }
    }
}

export { ProductsController };