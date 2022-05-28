import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  justify-content:  center;
  align-items: center;

  width: 48px;
  height: 48px;
  border-radius: 16px;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const Notify = styled.View`
  position: absolute;
  top: 12px;
  right: 16px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.SUCCESS_100};
  z-index: 1;
`;
