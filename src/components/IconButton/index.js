import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons'
import { Container, Notify } from './styles';

import { useTheme } from 'styled-components';

export function IconButton({ icon, notify, children, ...rest }) {
  const { COLORS } = useTheme();

  return (
    <Container>
      {icon ? (
        <>
          {
            notify && (
              <Notify />
            )
          }
          <Feather name={icon} size={18} color={COLORS.HEADING} {...rest} />
        </>
      ) :
        children
      }
    </Container>
  );
}
