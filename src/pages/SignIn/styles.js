import styled, { css } from 'styled-components/native';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';


export const KeyboardArea = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : null,
})`
  flex: 1;
`;

export const Container = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
background-color:  ${({ theme }) => theme.COLORS.HEADING};
`;

export const Content = styled.View`
  padding: 0 40px;
  margin-bottom: 64px;
`

export const Image = styled.Image`
  width: auto;
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

export const AccountContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin: 10px 0 30px;
`;

export const AccountButton = styled.TouchableOpacity``;
export const AccountText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;
