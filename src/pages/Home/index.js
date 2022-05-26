import React from 'react';
import { useTheme } from 'styled-components';

import { Feather } from '@expo/vector-icons';
import { Header, Container, Profile, ProfileContainer, ProflieImage, City } from './styles';

import { IconButton } from '../../components/IconButton';
import { Search } from '../../components/Search';

export function Home() {
  const { COLORS } = useTheme();

  return (
    <>
      <Header>
        <ProfileContainer>
          <Profile>
            <ProflieImage source={{ uri: 'https://github.com/rodrigocelvo.png' }} />
          </Profile>
          <City>
            <Feather name="map-pin" size={14} color={COLORS.HEADING} />
            Taboão da Serra, SP
          </City>
          <IconButton icon="bell" notify />
        </ProfileContainer>
      </Header>

      <Container>
        <Search />
      </Container>
    </>
  );
}
