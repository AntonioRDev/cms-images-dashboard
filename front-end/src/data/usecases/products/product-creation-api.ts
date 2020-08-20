import { CreateProduct } from "domain/usecases/products/create-product";
import { ProductModel } from "domain/models/product-model";
import { HttpClient } from "data/protocols/http-client";

export class ProductCreationApi implements CreateProduct {
    constructor(private readonly httpClient: HttpClient) {}

    async create(name: string, imageSrc: string): Promise<ProductModel> {
        const httpResponse = await this.httpClient.post({ name, imageSrc });

        return httpResponse;
    }
}
