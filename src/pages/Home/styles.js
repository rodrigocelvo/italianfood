import styled from 'styled-components/native';

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
  color: #5E4A32;
  text-align: center;
`;

export const TitleSpan = styled.Text`
 font-size: 40px;
  font-weight: bold;
  color: #A40608;
  text-align: center;

`;

export const Text = styled.Text`
  margin: 20px 0;
  text-align: center;
  color: #150E07;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #115B11;
  border-radius: 10px;

`;