import styled, { css } from 'styled-components/native';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Button';

export const Container = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
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
  justify-content: center;
  align-items: center;
  margin: 32px 0;
  margin-top: -100px;
`;

export const PickImageButton = styled(Button)`
  width: 200px;
  margin: 20px 0 0;
`;

export const Form = styled.View`
  width: 100%;
  padding: 24px;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  margin-bottom: 12px;
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `};
`;

export const InputGroup = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const InputGroupLine = styled.View`
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: center;
`;

export const InputGroupHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MaxCharacters = styled.Text`
  font-size: 10px;
  margin-bottom: 12px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `};
`;
