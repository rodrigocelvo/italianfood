import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Content, Image, Title, TitleSpan, Text, AccountContainer, AccountButton, AccountText } from './styles';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import chefImg from '../../assets/chef.png';
import { useNavigation } from '@react-navigation/native';

import { Alert } from 'react-native';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
  }

  function handleCreateAccount() {
  }

  function handleSignOut() {
  }

  return (
    <>
      <StatusBar hidden={true} />
      <Container>
        <Image source={chefImg} />
        <Content>
          <Title>
            Uma {'\n'}
            verdadeira {'\n'}
            <TitleSpan>experiência {'\n'}</TitleSpan>
            Italiana
          </Title>

          <Text>Prepare-se para se deliciar {'\n'} com a verdadeira real culinaria.</Text>

          <Input onChangeText={setEmail} value={email} icon="user" type="primary" placeholder="E-mail" />
          <Input onChangeText={setPassword} value={password} icon="lock" type="primary" placeholder="Senha" secureTextEntry />


          <AccountContainer>
            <AccountButton onPress={() => handleCreateAccount()}>
              <AccountText>Criar conta</AccountText>
            </AccountButton>

            <AccountButton onPress={() => handleSignOut()}>
              <AccountText>Esqueci minha senha</AccountText>
            </AccountButton>
          </AccountContainer>

          <Button onPress={() => handleSignIn()} title="Entrar no restaurante" type="primary" />
        </Content>
      </Container>
    </>
  );
}
