import styled, { css } from 'styled-components/native';
import { ScrollView } from 'react-native';

export const Container = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
flex: 1;
background-color:  ${({ theme }) => theme.COLORS.HEADING};
`;

export const Content = styled.View`
  padding: 0 40px;
  margin-bottom: 64px;
`

export const Image = styled.Image`
  width: auto ;
  height: 450px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.SECONDARY_500};
  `}
`;

export const TitleSpan = styled.Text`
  font-size: 60px;
  line-height: 60px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.HEADING};
    color: ${theme.COLORS.PRIMARY_100};
  `}

`;

export const Text = styled.Text`
  margin: 20px 0 40px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.SHAPE};
`;
