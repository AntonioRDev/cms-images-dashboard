import { ProductModel } from "domain/models/product-model";

export interface GetProducts {
    get(): Promise<ProductModel []>
}
