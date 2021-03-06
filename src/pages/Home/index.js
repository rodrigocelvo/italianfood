import React, { useState } from 'react';

import { useTheme } from 'styled-components';

import {
  KeyboardView,
  ScrollView,
  Header,
  Container,
  SearchArea,
  Content,
  Profile,
  ProfileContainer,
  ProfileImage,
  City,
  Label
} from './styles';


import { Feather } from '@expo/vector-icons';

import { IconButton } from '../../components/IconButton';
import { Input } from '../../components/Input';
import { CategorySelect } from '../../components/CategorySelect';
import { FoodList } from '../../components/FoodList';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

export function Home() {
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

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

  function handleViewProduct(id) {
    const route = user?.isAdmin ? 'Product' : 'Food';

    navigation.navigate(route, { id });
  }

  return (
    <>
      <KeyboardView>
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
                <IconButton icon="add-line" onPress={() => handleViewProduct()} />
              ) : (
                <IconButton icon="notification-line" hasNotification />
              )}
            </ProfileContainer>
          </Header>

          <Container>

            <SearchArea>
              <Input
                icon="search-line"
                type='secondary'
                onChangeText={setSearch}
                value={search}
                placeholder="Buscar prato..."
              />
            </SearchArea>


            <Label style={{ marginLeft: 24 }}>Categorias</Label>
            <CategorySelect setCategory={handleCategorySelect} categorySelected={category} />
            <Content>
              <Label>Pratos</Label>
              {
                <FoodList
                  handleViewProduct={handleViewProduct}
                  search={search}
                  category={category}
                />
              }
            </Content>
          </Container>
        </ScrollView>
      </KeyboardView>
    </>
  );
}
