import React from 'react';

import { Container, Title, Radio, Selected } from './styles';


export function Ingredient({ title, selected = false, ...rest }) {
  return (
    <Container selected={selected} {...rest}>
      <Title selected={selected}>{title}</Title>
      <Radio>{selected && <Selected />}</Radio>
    </Container>
  )
}
