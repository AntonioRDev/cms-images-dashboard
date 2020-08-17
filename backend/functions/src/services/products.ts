import { db } from "../config/firebase";
import { ProductCreation } from "../models/DTOs/ProductCreation";
import { adaptJsonFirestore } from "../utils/adapters/firestoreJsonAdapter";
import Product from "../models/Product";

class ProductsService {
    async getProducts() {
        const productsRef = await db.collection("Products").where("deletedAt", "==", "").get();        
        const products = productsRef.docs.map(doc => doc.data() as Product);
   
        return products;
    }

    async updateProduct(productId: string, product: Product) {
        const response = await db.collection("Products").doc(productId).update(product);

        return response;
    }

    async saveProduct(productDTO: ProductCreation){
        const { name, imageSrc } = productDTO;
        const newId = Date.now().toString();
        const product = new Product(newId, name, imageSrc);
        product.createdAt = newId;

        const response = await db.collection("Products").doc(newId).create(adaptJsonFirestore(product));
        return response;
    }

    async deleteProduct(productId: string){
        const productToDeleteRef = await db.collection("Products").doc(productId).get();
        const productToDelete = productToDeleteRef.data() as Product;
        
        productToDelete.deletedAt = Date.now().toString();
        const response = await db.collection("Products").doc(productId).update(productToDelete);

        return response;
    }
}

export default new ProductsService();