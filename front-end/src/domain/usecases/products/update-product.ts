import { ProductModel } from "domain/models/product-model";

export interface UpdateProduct {
    update(id: string, product: ProductModel): Promise<any>
}
