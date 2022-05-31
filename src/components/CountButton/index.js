import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { Container, Button, Text } from './styles';

export function CountButton({ totalItems, ...rest }) {
  const { COLORS } = useTheme();

  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count <= 1) {
      setDisabled(true)
      return;
    }
    setCount(count - 1);
  }

  return (
    <Container>
      <Button disabled={!disabled} {...rest} onPress={handleDecrement}>
        <Feather name="minus" size={16} color={COLORS.SHAPE} />
      </Button>

      <Text>{count}</Text>

      <Button onPress={handleIncrement}>
        <Feather name="plus" size={16} color={COLORS.PRIMARY_900} />
      </Button>
    </Container >
  );
}
