import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTheme } from 'styled-components';

import { Feather } from '@expo/vector-icons';
import { Header, Container, Content, Profile, ProfileContainer, ProflieImage, City, Label } from './styles';

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

  function handleViewFood() {
    navigation.navigate('Food');
  }

  function handleViewProduct() {
    navigation.navigate('Product');
  }

  function handleSignOut() {
    signOut();
  }


  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <ProfileContainer>
            <Profile onPress={handleSignOut}>
              <ProflieImage source={{ uri: 'https://rodrigocelvo.dev/_next/image?url=%2Fstatic%2Fimages%2Frc.jpeg&w=640&q=75' }} />
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

          <Label style={{ marginLeft: 24 }}>Selecione uma categoria</Label>
          <CategorySelect setCategory={handleCategorySelect} categorySelected={category} />
          <Content>
            <Label>Selecione um prato</Label>

            {
              foods.map((food) => (
                <FoodCard
                  key={food.id}
                  data={food}
                  onPress={user.isAdmin ? handleViewProduct : handleViewFood}
                />
              ))
            }

          </Content>
        </Container>
      </ScrollView>
    </>
  );
}
