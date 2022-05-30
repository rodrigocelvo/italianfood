import React from 'react';
import Icon from 'react-native-remix-icon';
import { useTheme } from 'styled-components/native';

import { Container, InputComponent } from './styles';
export function Input({ icon, type = 'primary', isFocused, ...rest }) {
  const { COLORS } = useTheme();

  return (
    <Container isFocused={isFocused} type={type}>
      {
        icon && (
          <Icon name={icon} size={20} color={type === 'primary' ? COLORS.SHAPE : COLORS.TEXT} />
        )
      }
      <InputComponent type={type}
        {...rest}
      />
    </Container>
  );
}
