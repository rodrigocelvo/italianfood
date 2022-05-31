import React from 'react';

import { Container, Notify } from './styles';
import Icon from 'react-native-remix-icon';

import { useTheme } from 'styled-components';

export function IconButton({ icon, color, hasNotification, children, ...rest }) {
  const { COLORS } = useTheme();

  return (
    <Container {...rest}>
      {icon ? (
        <>
          {
            hasNotification && (
              <Notify />
            )
          }
          <Icon name={icon} size={18} color={color ? color : COLORS.HEADING} {...rest} />
        </>
      ) :
        children
      }
    </Container>
  );
}
