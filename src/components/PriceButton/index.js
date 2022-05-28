import React from 'react';
import { Container, Text, Price } from './styles';

export function PriceButton({ price, isLoading = false, ...rest }) {

  return (
    <Container {...rest}>
      <Text>Comprar</Text>
      <Price>R${price}</Price>
    </Container>
  );
}
