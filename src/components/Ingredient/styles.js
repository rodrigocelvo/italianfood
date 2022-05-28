import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 8px;
  padding: 14px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;

export const Title = styled.Text`
  font-size: 16px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT_BOLD};
    color: ${(props) => props.selected ? theme.COLORS.PRIMARY_100 : theme.COLORS.TEXT};
  `}
`;

export const Radio = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BORDER};
  justify-content: center;
  align-items: center;
`;

export const Selected = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
  justify-content: center;
  align-items: center;
`;

