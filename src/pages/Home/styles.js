import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Header = styled.SafeAreaView`
  height: ${getBottomSpace() + 150}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: 24px;
`;

export const Profile = styled.TouchableOpacity`
    width: 48px;
    height: 48px;
`;

export const ProflieImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 16px;
`;

export const City = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.HEADING};
  align-self: center;
`;


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.View`
  padding: 0 24px;
`;

