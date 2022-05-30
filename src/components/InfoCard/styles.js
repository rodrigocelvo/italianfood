import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100px;
  height: 120px;
  background-color: ${({ theme }) => theme.COLORS.HEADING};
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  border-radius: 16px;
  margin-right: 10px;

`;

export const IconArea = styled.View`
  width: 100%;
  height: 60%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const Content = styled.View`
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TEXT};
    font-family: ${theme.FONTS.TEXT};
  `}
`;
