import React, { useState, useEffect } from "react";
import { ProductListageApi } from "data/usecases/products/list-products-api";
import { ProductModel } from "domain/models/product-model";
// import { Container } from './styles';

type Props = {
  productListageApi: ProductListageApi;
};

const ListProducts: React.FC<Props> = ({ productListageApi }) => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await productListageApi.get();
      setProducts(products);
    };

    getProducts();
  }, [productListageApi]);

  return <div />;
};

export default ListProducts;
