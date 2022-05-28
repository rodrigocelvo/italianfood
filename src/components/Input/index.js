import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container, InputComponent } from './styles';


export function Input({ icon, isFocused, ...rest }) {
  const { COLORS } = useTheme();

  return (
    <Container isFocused={isFocused}>
      {
        icon && (
          <SimpleLineIcons name={icon} size={20} color={COLORS.TEXT} />
        )
      }
      <InputComponent
        {...rest}
      />
    </Container>
  );
}
