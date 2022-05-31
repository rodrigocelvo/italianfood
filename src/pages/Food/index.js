import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { firestore } from '../../services/firebase';

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

import { useAuth } from '../../hooks/auth';

export function Food() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('0,00');
  const [sauce, setSauce] = useState([]);
  const [time, setTime] = useState('');
  const [star, setStar] = useState('');
  const [calory, setCalory] = useState('');
  const [category, setCategory] = useState('1');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const [molho, setMolho] = useState('');
  const [molinho, setMolinhos] = useState('');
  const navigation = useNavigation();

  const route = useRoute();
  const { id } = route.params;
  const { user } = useAuth();

  function handleGoBack() {
    navigation.goBack();
  }


  async function handleAdd() {
    if (!molinho) {
      return Alert.alert('Compra', 'Selecione um molho.');
    }

    setIsLoading(true);

    firestore
      .collection('sauces')
      .doc(molinho)
      .get()
      .then((doc) => {
        setMolho(doc.data().name);
      }
      )

    firestore
      .collection('orders')
      .add({
        name: name,
        sauce: molho,
        status: 'Preparando',
        user_id: user?.id,
        image,
      })
      .then(() => navigation.navigate('Home'))
      .catch(() => {
        Alert.alert('Comra', 'Erro ao tentar comprar.');
      })
      .finally(() => setIsLoading(false));
  }



  useEffect(() => {
    if (id) {
      firestore
        .collection('products')
        .doc(id)
        .get()
        .then(async (response) => {
          const product = await response.data();
          setImage(product.photo_url);
          setName(product.name);
          setDescription(product.description);
          setTime(product.time);
          setStar(product.star);
          setPrice(product.price);
          setCategory(product.category);
          setCalory(product.calory);
        })
        .catch((error) => console.log(error));

      firestore
        .collection('sauces')
        .get()
        .then(async (response) => {
          const data = await response.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setSauce(data)
        })
        .catch(() => Alert.alert('Erro ao buscar produtos'));

    }
  }, [id]);

  return (
    <Container>
      <Header>
        <IconButton icon="chevron-left" onPress={handleGoBack} />
        <IconButton icon="heart" />

      </Header>
      <Upload>
        <Photo uri={image} />
      </Upload>
      <Content>
        <Name>
          {name}
          {'\n'}
          R$ {price}
        </Name>

        <Descripition>
          {description}
          {'\n'}
          {category}
        </Descripition>

        <Information>
          <InfoCard title={time} icon="time-fill" color='#5499ee' />
          <InfoCard title={star} icon="star-fill" color='#fabf49' />
          <InfoCard title={calory} icon="fire-fill" color='#ec4a4e' />
        </Information>
      </Content>

      <IngredientContainer>
        <IngredientContent>
          <IngredientLabel>Molhos</IngredientLabel>
          <IngredientTypeTitle>Escolha até 1 opção</IngredientTypeTitle>
        </IngredientContent>

        {
          sauce.map(molho => (
            <Ingredient key={molho.id} title={molho.name}
              selected={molinho === molho.id}
              onPress={() => setMolinhos(molho.id)}
            />))
        }

        <Price>
          <CountButton />
          <PriceButton onPress={handleAdd} />
        </Price>
      </IngredientContainer>

    </Container >
  );
}
