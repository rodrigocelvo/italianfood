import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.HEADING};
  width: 30%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-radius: 16px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  margin-right: 10px;
`;

export const Button = styled(RectButton)``;

export const Text = styled.Text`
  font-size: 18px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SHAPE};
    font-family: ${theme.FONTS.TEXT};
  `}
`;


