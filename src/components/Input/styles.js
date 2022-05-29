import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  border-radius: 16px;

  ${({ theme }) => css`
  background-color: ${(props) => props.type === 'primary' ? theme.COLORS.BORDER : theme.COLORS.HEADING};
  border: 1px solid ${(props) => props.isFocused ? theme.COLORS.PRIMARY_100 : theme.COLORS.HEADING};
  `};

`;

export const InputComponent = styled(TextInput).attrs(({ theme, type }) => ({
  placeholderTextColor: type === 'primary' ? theme.COLORS.SHAPE : theme.COLORS.TEXT,
}))`
  flex: 1;
  padding-left: 12px;
  height: 58px;

  ${({ theme, type }) => css`
  font-family: ${theme.FONTS.TEXT};
  color: ${type === 'primary' ? theme.COLORS.SHAPE : theme.COLORS.TEXT};
  `};
`;


