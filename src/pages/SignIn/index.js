import React from 'react';

import { Container, Content, Waiter, Title, TitleSpan, Text } from './styles';

import { Button } from '../../components/Button';

import chefImg from '../../assets/chef.png';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <>
      <Container>
        <Waiter source={chefImg} />
        <Content>
          <Title>
            Uma {'\n'}
            verdadeira {'\n'}
            <TitleSpan>experiência {'\n'}</TitleSpan>
            Italiana
          </Title>

          <Text>Prepare-se para se deliciar {'\n'} com a verdadeira real culinaria.</Text>
          <Button onPress={handleSignIn} title="Entrar no restaurante" type="primary" />
        </Content>
      </Container>
    </>
  );
}
