import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  align-items: center;
`;

export const ScrollView = styled.ScrollView`
flex: 1;
`;

export const OrderArea = styled.View`
  margin-top: 10px;
  width: 80%;
  height: 80px;
  background-color: ${({ theme }) => theme.COLORS.HEADING};
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
`;

export const OrderName = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  width: 60%;
`;

export const OrderText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const Image = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-left: 20px
`;

export const Status = styled.View`
  width: 80px;
  height: 20px;
  background-color: ${({ theme }) => theme.COLORS.SUCCESS_900};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const StatusText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.HEADING};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;
