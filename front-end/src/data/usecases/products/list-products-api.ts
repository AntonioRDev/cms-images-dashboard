import { HttpClient } from "data/protocols/http-client";
import { GetProducts } from "domain/usecases/products/get-products";
import { ProductModel } from "domain/models/product-model";

export class ProductListageApi implements GetProducts {
    constructor(private readonly httpClient: HttpClient) {}

    async get(): Promise<ProductModel[]> {
        const url = "http://localhost:5000/cms-images-dashboard/us-central1/API/products";
        const httpResponse = await this.httpClient.get({ url });

        return httpResponse;
    }
}