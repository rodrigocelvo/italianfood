import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  margin: 10px 8px;
  align-items: center;
  justify-content: center;
  width: 104px;
  height: 150px;
  border-radius: 16px;
  padding: 14px 16px;

  ${({ theme }) => css`
  background-color: ${(props) => props.selected ? theme.COLORS.PRIMARY_100 : theme.COLORS.HEADING};
  border: 1px solid ${(props) => props.selected ? theme.COLORS.PRIMARY_900 : theme.COLORS.SUCCESS_50};
  `}


`;
export const Title = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  
  ${({ theme }) => css`
  font-family: ${theme.FONTS.TEXT};
  color: ${(props) => props.selected ? theme.COLORS.HEADING : theme.COLORS.SHAPE};
  `}
`;

export const Image = styled.Image`
  width: 58px;
  height: 58px;
`;
