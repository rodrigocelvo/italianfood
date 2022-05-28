import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import { Container, Content, Icon, Title } from './styles';

export function InfoCard({ icon, title, color, ...rest }) {
  return (
    <Container>
      <Icon>
        <SimpleLineIcons name={icon} size={28} color={color} />
      </Icon>

      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  );
}
