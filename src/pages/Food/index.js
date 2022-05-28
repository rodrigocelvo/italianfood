import React, { useState } from 'react';

import {
  Container,
  Header,
  Content,
  Upload,
  PickImageButton,
  Name,
  Descripition,
  Information,
  IngredientContainer,
  IngredientContent,
  IngredientTypeTitle,
  IngredientLabel,
  Price,
} from './styles';

import { IconButton } from '../../components/IconButton';
import { Photo } from '../../components/Photo';
import { InfoCard } from '../../components/InfoCard';
import { Ingredient } from '../../components/Ingredient';
import { CountButton } from '../../components/CountButton';
import { PriceButton } from '../../components/PriceButton';

import { molhos } from '../../utils/molhos';


export function Food() {
  const [molinho, setMolinhos] = useState('');

  return (
    <Container>
      <Header>
        <IconButton icon="chevron-left" onPress={() => { }} />
        <IconButton icon="heart" />

      </Header>
      <Upload>
        <Photo uri='https://i.imgur.com/SMmLwFW.png' />
      </Upload>
      <Content>
        <Name>
          Veggie Feggie
        </Name>

        <Descripition>
          Macarrão, pepino, ervas finas e tomate cereja...
        </Descripition>

        <Information>
          <InfoCard title="50min" icon="clock" color='#5499ee' />
          <InfoCard title="4.2" icon="star" color='#fabf49' />
          <InfoCard title="147kcal" icon="fire" color='#ec4a4e' />
        </Information>
      </Content>

      <IngredientContainer>
        <IngredientContent>
          <IngredientLabel>Molhos</IngredientLabel>
          <IngredientTypeTitle>Escolha até 1 opção</IngredientTypeTitle>
        </IngredientContent>


        {
          molhos.map(molho => (
            <Ingredient key={molho.id} title={molho.name}
              selected={molinho === molho.id}
              onPress={() => setMolinhos(molho.id)}
            />
          ))
        }

        <Price>
          <CountButton totalItems="0" />
          <PriceButton price="59,90" />
        </Price>
      </IngredientContainer>

    </Container >
  );
}
