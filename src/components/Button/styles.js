import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
  background-color: ${(props) => props.type === 'primary' ? theme.COLORS.SUCCESS_100 : theme.COLORS.PRIMARY_900};
  `}
`;

export const Title = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    color: ${theme.COLORS.HEADING};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.HEADING,
}))``;
