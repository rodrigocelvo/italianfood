import React from 'react';

import { Container, Content, Waiter, Title, TitleSpan, Text, Button } from './styles';

import waiterImg from '../../assets/waiter.png';
import chefImg from '../../assets/chef.png';

export function Home() {
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
          <Button>
            <Text>aaa</Text>
          </Button>
        </Content>
      </Container>
    </>
  );
}