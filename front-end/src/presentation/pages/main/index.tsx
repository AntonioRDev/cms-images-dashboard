import React from "react";
import { Header, Container, Title } from './styles';
import ListProducts from "presentation/components/list-products";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>
        <h1>Nossos Produtos:</h1>
      </Title>
      <ListProducts />
    </Container>
  );
};

export default Main;
