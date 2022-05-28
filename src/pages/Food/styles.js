import styled, { css } from 'styled-components/native';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Button';

export const Container = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.View`
  margin: -20px 80px;
  align-items: center;
`;

export const Header = styled.View`
height: 200px;
background-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
flex-direction: row;
justify-content: space-between;
padding: 50px 24px 0;

`;

export const Upload = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
  margin-top: -100px;
`;

export const PickImageButton = styled(Button)`
  max-width: 90px;
  margin-left: 32px;
`;


export const Name = styled.Text`
  font-size: 30px;

  ${({ theme }) => css`
  color: ${theme.COLORS.SECONDARY_900};
  font-family: ${theme.FONTS.TITLE};
  `};
`;
export const Descripition = styled.Text`
  margin-top: 20px;
  font-size: 12px;
  text-align: center;

  ${({ theme }) => css`
  color: ${theme.COLORS.TEXT};
  font-family: ${theme.FONTS.TEXT};
  `};

`;

export const Information = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;


export const IngredientContainer = styled.View`
  margin: 40px 0;
`;
export const IngredientContent = styled.View`
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.BORDER};
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const IngredientLabel = styled.Text`
  font-size: 18px;

  ${({ theme }) => css`
  color: ${theme.COLORS.SECONDARY_900};
  font-family: ${theme.FONTS.TITLE};
  `};
`;
export const IngredientTypeTitle = styled.Text`
  font-size: 12px;

  ${({ theme }) => css`
  color: ${theme.COLORS.TEXT};
  font-family: ${theme.FONTS.TEXT};
  `};
`;

export const IngrientList = styled.View`
    padding: 0 10px;
`;

export const Price = styled.View`
  flex-direction: row;
  justify-content: center;
`;
