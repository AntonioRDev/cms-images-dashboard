import express from "express";
import ProductService from "../services/products";
import { ProductCreation } from "../models/DTOs/ProductCreation";
import Product from "../models/Product";
class ProductsController {
  async products(req: express.Request, res: express.Response) {
    const response = await ProductService.getProducts();
    res.status(200).json({ data: response });
  }

  async updateProduct(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const body = req.body as Product;

    if (id && body) {
      const response = await ProductService.updateProduct(id, body);
      res.status(201).json({ data: response });
    } else {
      console.log("updateProduct - Missing or invalid id or Invalid body params");
      res.status(400).json({ message: "Missing or invalid id or invalid body params" });
    }
  }

  async saveProduct(req: express.Request, res: express.Response) {
    const body = req.body as ProductCreation;

    if (body) {
      const response = await ProductService.saveProduct(body);
      res.status(201).json({ data: response });
    } else {
      console.log("saveProduct - Missing params");
      res.status(400).json({ message: "Missing params" });
    }
  }

  async deleteProduct(req: express.Request, res: express.Response) {
    const id = req.params.id;

    if (id) {
      const response = await ProductService.deleteProduct(id);
      res.status(201).json({ data: response });
    } else {
      console.log("deleteProduct - Missing or invalid id");
      res.status(400).json({ message: "Missing or invalid id" });
    }
  }
}

export { ProductsController };
