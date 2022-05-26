import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
flex: 1;
background-color:  white;
`;

export const Content = styled.View`
  padding: 30px;
`

export const Waiter = styled.Image`
  width: auto ;
  height: 450px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.SECONDARY_500};
  text-align: center;
  line-height: 40px;
`;

export const TitleSpan = styled.Text`
  font-size: 60px;
  line-height: 60px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.HEADING};
    color: ${theme.COLORS.PRIMARY_900};
  `}

`;

export const Text = styled.Text`
  margin: 30px 0;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.SHAPE};
`;
