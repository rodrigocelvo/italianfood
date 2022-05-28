import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container, InputComponent } from './styles';


export function StatsInput({ icon, isFocused, color, ...rest }) {
  const { COLORS } = useTheme();

  return (
    <Container isFocused={isFocused}>
      {
        icon && (
          <SimpleLineIcons name={icon} size={20} color={color ? color : COLORS.TEXT} />
        )
      }
      <InputComponent
        {...rest}
      />
    </Container>
  );
}
