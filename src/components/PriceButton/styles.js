import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.COLORS.HEADING};
  width: 60%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-radius: 16px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
`;

export const Text = styled.Text`
  font-size: 18px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SHAPE};
    font-family: ${theme.FONTS.TEXT};
  `}
`;
export const Price = styled.Text`
  font-size: 20px;

  ${({ theme }) => css`
    color: ${theme.COLORS.PRIMARY_100};
    font-family: ${theme.FONTS.TITLE};
  `}
`;


