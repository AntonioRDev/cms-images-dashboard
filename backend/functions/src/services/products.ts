import { db } from "../config/firebase";
import { ProductCreation } from "../models/DTOs/ProductCreation";
import Product from "../models/Product";

class ProductsService {
    async getProducts() {
        const productsRef = await db.collection("Products").get();        
        const products = productsRef.docs.map(doc => doc.data() as Product);
        
        return products;
    }

    async updateProduct(productId: string) {
 
    }

    async saveProduct(product: ProductCreation){

    }

    async deleteProduct(productId: string){

    }
}

export default new ProductsService();