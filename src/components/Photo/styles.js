import styled, { css } from 'styled-components/native';

export const Image = styled.Image`
  width: 250px;
  height: 250px;
  border-radius: 125px;
`;

export const Placeholder = styled.View`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${({ theme }) => theme.COLORS.SHAPE};
`;

export const PlaceholderTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `};
`;
