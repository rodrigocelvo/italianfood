import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  background-color: ${({ theme }) => theme.COLORS.HEADING};
  border-radius: 16px;

  ${({ theme }) => css`
  border: 1px solid ${(props) => props.isFocused ? theme.COLORS.PRIMARY_100 : theme.COLORS.HEADING};
  `};

`;

export const InputComponent = styled(TextInput)`
  flex: 1;
  padding-left: 12px;
  height: 58px;

  ${({ theme }) => css`
  font-family: ${theme.FONTS.TEXT};
  color: ${theme.COLORS.TEXT};


  `};
`;


