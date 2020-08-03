import express = require("express");
import { ProductsController as ProductsControllerType } from "./controllers/ProductsController";
import { StorageController as StorageControllerType } from "./controllers/StorageController";

const ProductsController = new ProductsControllerType();
const StorageController = new StorageControllerType();

const routes = express.Router();

routes.get("/products", ProductsController.products);
routes.put("/updateProduct/:id", ProductsController.updateProduct);
routes.post("/saveProduct", ProductsController.saveProduct);
routes.post("/saveImage", StorageController.saveImage)
routes.delete("/deleteProduct/:id", ProductsController.deleteProduct);

export default routes;
