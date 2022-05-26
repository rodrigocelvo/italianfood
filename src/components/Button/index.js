import React from 'react';

import { Container, Title, Load } from './styles';

export function Button({ title, type, isLoading = false, ...rest }) {
  return (
    <Container type={type} enabled={!isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  );
}
