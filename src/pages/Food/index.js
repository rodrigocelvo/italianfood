import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { firestore, storage } from '../../services/firebase';

import {
  Container,
  Header,
  Content,
  Upload,
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
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('0,00');
  const [sauce, setSauce] = useState('');
  const [time, setTime] = useState('');
  const [star, setStar] = useState('');
  const [calories, setCalories] = useState('');
  const [category, setCategory] = useState('1');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [molinho, setMolinhos] = useState('');
  const navigation = useNavigation();

  const route = useRoute();
  const { id } = route.params;

  function handleGoBack() {
    navigation.goBack();
  }


  useEffect(() => {
    if (id) {
      firestore
        .collection('products')
        .doc(id)
        .get()
        .then(async (response) => {
          const product = await response.data();
          setImage(product.image);
          setName(product.name);
          setDescription(product.description);
          setTime(product.time);
          setSauce(product.sauce);
          setStar(product.star);
          setPrice(product.price);
          setCategory(product.category);
          setCalories(product.calories);


        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  return (
    <Container>
      <Header>
        <IconButton icon="chevron-left" onPress={handleGoBack} />
        <IconButton icon="heart" />

      </Header>
      <Upload>
        <Photo uri='https://i.imgur.com/SMmLwFW.png' />
      </Upload>
      <Content>
        <Name>
          {name}
        </Name>

        <Descripition>
          {description}
        </Descripition>

        <Information>
          <InfoCard title={time} icon="clock" color='#5499ee' />
          <InfoCard title={star} icon="star" color='#fabf49' />
          <InfoCard title={calories} icon="fire" color='#ec4a4e' />
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
          <PriceButton price={price} />
        </Price>
      </IngredientContainer>

    </Container >
  );
}
