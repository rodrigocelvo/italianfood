import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container, Input, Button, InputArea, ButtonClear } from './styles';


export function Search({ ...rest }) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <InputArea>
        <Input placeholder="Pesquisar..." {...rest} />

        <ButtonClear>
          <Feather name="x" size={16} />
        </ButtonClear>
      </InputArea>

      <Button>
        <Feather name="search" size={16} color={COLORS.HEADING} />
      </Button>
    </Container>
  );
}
