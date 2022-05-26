import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
  padding: 0px 24px;
`;

export const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.HEADING};
    border: 1px solid ${theme.COLORS.BORDER};
  `}
`;

export const Input = styled(TextInput)`
  flex: 1;
  height: 52px;
  padding-left: 12px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const ButtonClear = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Button = styled(RectButton)`
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.SUCCESS_100};

  margin-left: 10px;

`;
