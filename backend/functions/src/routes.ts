import express = require("express");
import ProductsController from "./controllers/ProductsController";
import StorageController from "./controllers/StorageController";

const routes = express.Router();

routes.get("/products", ProductsController.products);
routes.put("/updateProduct/:id", ProductsController.updateProduct);
routes.post("/saveProduct", ProductsController.saveProduct);
routes.post("/saveImage", StorageController.saveImage)
routes.delete("/deleteProduct/:id", ProductsController.deleteProduct);

export default routes;
