import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons'
import { Container, Notify } from './styles';

import { useTheme } from 'styled-components';

export function IconButton({ icon, hasNotification, children, ...rest }) {
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
          <Feather name={icon} size={18} color={COLORS.HEADING} />
        </>
      ) :
        children
      }
    </Container>
  );
}
