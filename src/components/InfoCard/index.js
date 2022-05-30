import React from 'react';
import Icon from 'react-native-remix-icon';

import { Container, Content, IconArea, Title } from './styles';

export function InfoCard({ icon, title, color, ...rest }) {
  return (
    <Container>
      <IconArea>
        <Icon name={icon} size={28} color={color} />
      </IconArea>

      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  );
}
