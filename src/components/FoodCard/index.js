import React from 'react';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Content,
  Description,
  Identification,
  Image,
  Name,
  Details,
  Price
} from './styles';


export function FoodCard({ data, ...rest }) {
  const { COLORS } = useTheme();

  return (
    <Container {...rest}>

      <Content>
        <Image source={{ uri: data.photo_url }} />

        <Details>
          <Identification>
            <Name>{data.name}</Name>
            <Feather name="chevron-right" size={24} color={COLORS.SECONDARY_900} />
          </Identification>

          <Description>{data.description}</Description>
          <Price>R$ {data.price}</Price>
        </Details>
      </Content>
    </Container>
  );
}
