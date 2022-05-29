import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';

import { useTheme } from 'styled-components';

import {
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

import { foods } from '../../utils/foods';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';


export function Home() {
  const [category, setCategory] = useState('');
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

  function handleViewFood(id) {
    navigation.navigate('Food');
  }

  function handleViewProduct(id) {
    navigation.navigate('Product');

    console.log(id)
  }



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
              <IconButton icon="plus" />
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
              foods.map((food) => (
                <FoodCard
                  key={food.id}
                  data={food}
                  onPress={
                    user.isAdmin
                      ? () => handleViewProduct(food.id)
                      : () => handleViewFood(food.id)
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
