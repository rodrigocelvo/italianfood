import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  KeyboardArea,
  Container,
  Content,
  Image,
  Title,
  TitleSpan,
  Text,
  AccountContainer,
  AccountButton,
  AccountText
} from './styles';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import chefImg from '../../assets/chef.png';

import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, signOut, createAccount, loading } = useAuth();

  function handleSignIn() {
    signIn(email, password);
  }

  function handleCreateAccount() {
    createAccount(email, password);
  }

  function handleSignOut() {
    signOut()
  }

  return (
    <>
      <StatusBar hidden={true} />
      <KeyboardArea>
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
            <Input onChangeText={setEmail} value={email} icon="user-line" type="primary" placeholder="E-mail" />
            <Input onChangeText={setPassword} value={password} icon="lock-line" type="primary" placeholder="Senha" secureTextEntry />

            <AccountContainer>
              <AccountButton onPress={() => handleCreateAccount()}>
                <AccountText>Criar conta</AccountText>
              </AccountButton>

              <AccountButton onPress={() => handleSignOut()}>
                <AccountText>Esqueci minha senha</AccountText>
              </AccountButton>
            </AccountContainer>

            <Button onPress={() => handleSignIn()} title="Entrar no restaurante" type="primary" isLoading={loading} />
          </Content>

        </Container>
      </KeyboardArea>
    </>
  );
}
