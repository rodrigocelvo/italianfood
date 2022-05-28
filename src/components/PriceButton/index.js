import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { Container, Text, Price } from './styles';

export function PriceButton({ price, ...rest }) {

  return (
    <Container>
      <Text>Comprar</Text>
      <Price>R${price}</Price>
    </Container>
  );
}
