import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components';

import { Feather } from '@expo/vector-icons';
import { Header, Container, Content, Profile, ProfileContainer, ProflieImage, City, Label } from './styles';

import { IconButton } from '../../components/IconButton';
import { Search } from '../../components/Search';
import { CategorySelect } from '../../components/CategorySelect';
import { FoodCard } from '../../components/FoodCard';


import { foods } from '../../utils/foods';

export function Home() {
  const [category, setCategory] = useState('');
  const { COLORS } = useTheme();

  function handleCategorySelect(categoryId) {
    if (categoryId === category) {
      return setCategory('');
    }

    setCategory(categoryId);
  }

  ;

  return (
    <>
      <ScrollView>
        <Header>
          <ProfileContainer>
            <Profile>
              <ProflieImage source={{ uri: 'https://rodrigocelvo.dev/_next/image?url=%2Fstatic%2Fimages%2Frc.jpeg&w=640&q=75' }} />
            </Profile>
            <City>
              <Feather name="map-pin" size={14} color={COLORS.HEADING} />
              Taboão da Serra, SP
            </City>
            <IconButton icon="bell" hasNotification />
          </ProfileContainer>
        </Header>


        <Container>
          <Search />

          <Label style={{ marginLeft: 24 }}>Selectione uma categoria</Label>
          <CategorySelect setCategory={handleCategorySelect} categorySelected={category} />
          <Content>
            <Label>Selecione um prato</Label>

            {
              foods.map((food) => (
                <FoodCard
                  key={food.id}
                  data={food}
                  onPress={() => { }}
                />
              ))
            }



          </Content>
        </Container>
      </ScrollView>
    </>
  );
}
