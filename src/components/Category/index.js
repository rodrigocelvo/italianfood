import React from 'react';

import { Container, Title, Image } from './styles';

export function Category({ title, image_url, selected = false, ...rest }) {
  return (
    <Container selected={selected} {...rest}>
      <Image source={{ uri: image_url }} />

      <Title selected={selected}>{title}</Title>
    </Container>
  );
}
