import React from "react";
import ListProducts from "../../components/list-products";
import { ProductListageApi } from "../../../data/usecases/products/list-products-api";
import { AxiosHttpClient } from "infra/http/axios-http-client";

export const listProductFactory = () => {
  const httpClient = new AxiosHttpClient();
  const productListageApi = new ProductListageApi(httpClient);

  return <ListProducts productListageApi={productListageApi} />;
};
