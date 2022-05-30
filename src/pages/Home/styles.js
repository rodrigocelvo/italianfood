import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { ScrollView as ScrollViewComponent } from 'react-native';

export const ScrollView = styled(ScrollViewComponent).attrs({
  showsVerticalScrollIndicator: false,
})`
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const Header = styled.SafeAreaView`
  height: ${getBottomSpace() + 120}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
`;

export const SearchArea = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
  padding: 0px 24px;
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

export const ProfileImage = styled.Image`
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
  margin-bottom: ${getBottomSpace() + 40}px;
`;

export const Content = styled.View`
  padding: 0 24px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.SHAPE};
  text-transform: uppercase;
  margin-top: 16px;
`;

