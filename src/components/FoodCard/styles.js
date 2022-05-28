import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 180px;
  background-color: white;
  justify-content: center;
  border-radius: 16px;
  padding: 30px;
  margin: 8px 0; 
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 104px;
  height: 104px;
  border-radius: 52px;
  margin-right: 20px;
`;

export const Details = styled.View`
  flex: 1;

`;

export const Identification = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  flex: 1;
  font-size: 20px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`;

export const Description = styled.Text`
  margin: 8px 0;
  font-size: 12px;
  line-height: 20px;
  margin-right: 21px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.TEXT};
  `}
`;

export const Price = styled.Text`
  font-size: 20px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.SUCCESS_100};
  `}
`;
