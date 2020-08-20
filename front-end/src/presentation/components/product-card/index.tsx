import React from 'react';
import { Container, Overlay } from './styles';

type Props = {
  src: string;
  name: string
}

const ProductCard: React.FC<Props> = ({ src, name }) => {
  return (
    <Container>
      <img src={src} alt={`Imagem do produto: ${name}`}/>

      <Overlay>
        <div>
          <p>{name}</p>
        </div>
      </Overlay>
    </Container>
  );
}

export default ProductCard;