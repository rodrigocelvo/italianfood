import React from 'react';
import Icon from 'react-native-remix-icon';
import { useTheme } from 'styled-components/native';

import { Container, InputComponent } from './styles';


export function StatsInput({ icon, isFocused, color, ...rest }) {
  const { COLORS } = useTheme();

  return (
    <Container isFocused={isFocused}>
      {
        icon && (
          <Icon name={icon} size={20} color={color ? color : COLORS.TEXT} />
        )
      }
      <InputComponent
        {...rest}
      />
    </Container>
  );
}
