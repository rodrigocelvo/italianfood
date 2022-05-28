import React, { useState } from 'react';

import {
  Container,
  Header,
  Upload,
  PickImageButton,
  Form,
  Label,
  InputGroup,
  InputGroupLine,
  InputGroupHeader,
  MaxCharacters
} from './styles';

import { IconButton } from '../../components/IconButton';
import { Photo } from '../../components/Photo';
import { Input } from '../../components/Input';
import { StatsInput } from '../../components/StatsInput';
import { CategorySelect } from '../../components/CategorySelect';
import { Button } from '../../components/Button';


export function Product() {

  return (
    <Container>
      <Header>
        <IconButton icon="chevron-left" onPress={() => { }} />
      </Header>
      <Upload>
        <Photo uri='https://i.imgur.com/SMmLwFW.png' />
        <PickImageButton
          title="Carregar"
          type="secondary"
          onPress={() => { }}
        />
      </Upload>

      <Form>

        <InputGroup>
          <Label>Nome</Label>

          <Input icon="pencil" placeholder="asdasd" />
        </InputGroup>

        <InputGroup>
          <InputGroupHeader>
            <Label>Descrição</Label>
            <MaxCharacters>
              0 de 200 caracteres
            </MaxCharacters>
          </InputGroupHeader>
          <Input
            icon="note"
            isFocused
            placeholder="Descrição do produto"
            multiline
            maxLength={200}
            style={{ height: 100 }}
          />
        </InputGroup>

        <InputGroup>
          <Label>Informações</Label>
          <InputGroupLine>

            <StatsInput icon="clock" placeholder="Tempo" color="#5499ee" />
            <StatsInput icon="star" placeholder="Nota" color="#fabf49" />
            <StatsInput icon="fire" placeholder="Kcal" color="#ec4a4e" />
          </InputGroupLine>
        </InputGroup>

        <InputGroup>
          <Label>Molhos</Label>
          <Input icon="tag" placeholder="Molhos separados por virgula" />
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <CategorySelect />

        </InputGroup>


        <Button title="Cadastrar Prato" />


      </Form>
    </Container >
  );
}
