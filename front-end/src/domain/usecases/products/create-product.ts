import { ProductModel } from "domain/models/product-model";

export interface CreateProduct {
    create(name: string, imageSrc: string): Promise<ProductModel>
}

