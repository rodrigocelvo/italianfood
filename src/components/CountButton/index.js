import React from 'react';
import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { Container, Button, Text } from './styles';

export function CountButton({ totalItems, disabled = true, ...rest }) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Button disabled={disabled} {...rest}>
        <Feather name="minus" size={16} color={COLORS.SHAPE} />
      </Button>

      <Text>{totalItems}</Text>

      <Button>
        <Feather name="plus" size={16} color={COLORS.PRIMARY_900} />
      </Button>
    </Container>
  );
}
