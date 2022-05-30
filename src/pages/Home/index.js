import React, { useState, useCallback } from 'react';
import { firestore, storage } from '../../services/firebase';

import { useTheme } from 'styled-components';

import {
  ScrollView,
  Header,
  Container,
  Content,
  Profile,
  ProfileContainer,
  ProfileImage,
  City,
  Label
} from './styles';


import { Feather } from '@expo/vector-icons';

import { IconButton } from '../../components/IconButton';
import { Search } from '../../components/Search';
import { CategorySelect } from '../../components/CategorySelect';
import { FoodCard } from '../../components/FoodCard';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';


export function Home() {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const { COLORS } = useTheme();
  const { signOut, user } = useAuth();

  function handleCategorySelect(categoryId) {
    if (categoryId === category) {
      return setCategory('');
    }

    setCategory(categoryId);
  }

  const navigation = useNavigation();

  function handleSignOut() {
    signOut();
  }

  function handleOpen(id) {
    const route = user?.isAdmin ? 'Product' : 'Food';

    navigation.navigate(route, { id });
  }

  function handleViewProduct(id) {
    navigation.navigate('Product', '');
  }

  function fecthProducts(value) {
    const formattedValue = value.toLowerCase().trim();

    firestore
      .collection('products')
      .orderBy('name_insensitive')
      .startAt(formattedValue)
      .endAt(`${formattedValue}\uf8ff`)
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(data);
      })
      .catch(() => Alert.alert('Erro ao buscar pizzas'));
  }

  useFocusEffect(
    useCallback(() => {
      fecthProducts('');
    }, [])
  );


  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <ProfileContainer>
            <Profile onPress={handleSignOut}>
              <ProfileImage source={{ uri: 'https://rodrigocelvo.dev/_next/image?url=%2Fstatic%2Fimages%2Frc.jpeg&w=640&q=75' }} />
            </Profile>
            <City>
              {
                user.isAdmin ? 'Administrador' : (
                  <>
                    <Feather name="map-pin" size={14} color={COLORS.HEADING} />

                    Taboão da Serra, SP {'\n'}
                  </>
                )
              }
            </City>
            {user.isAdmin ? (
              <IconButton icon="plus" onPress={() => handleViewProduct()} />
            ) : (
              <IconButton icon="bell" hasNotification />
            )}
          </ProfileContainer>
        </Header>


        <Container>
          <Search />

          <Label style={{ marginLeft: 24 }}>Categorias</Label>
          <CategorySelect setCategory={handleCategorySelect} categorySelected={category} />
          <Content>
            <Label>Pratos</Label>

            {
              products.map((food) => (
                <FoodCard
                  key={food.id}
                  data={food}
                  onPress={
                    user.isAdmin
                      ? () => handleOpen(food.id)
                      : () => handleOpen(food.id)
                  }
                />
              ))
            }

          </Content>
        </Container>
      </ScrollView>
    </>
  );
}
