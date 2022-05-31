import React, { useEffect, useState, Fragment } from 'react';
import {
  Container,
  OrderArea,
  Title,
  OrderName,
  Image,
  Content,
  ScrollView,
} from './styles';

import { firestore } from '../../services/firebase';

import { IconButton } from '../../components/IconButton';
import { useTheme } from 'styled-components';

export function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const { COLORS } = useTheme();

  useEffect(() => {
    const subscribe = firestore
      .collection("products")
      .where('liked', '==', true)
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        setFavorites(data);
      });
    return () => subscribe();
  }, []);

  function handleFavorite(item) {
    firestore
      .collection('products')
      .doc(item)
      .update({
        liked: false
      });
    const newFavorites = favorites.filter(favorite => favorite.id !== item);
    setFavorites(newFavorites);
  }



  return (
    <ScrollView>
      <Container>
        <Title>Favoritos</Title>

        {
          favorites.map((fav) => (
            <Fragment key={fav.id}>
              <OrderArea>
                <Image source={{ uri: fav.photo_url }} />
                <Content>
                  <OrderName>{fav.name}</OrderName>
                  <IconButton
                    onPress={() => handleFavorite(fav.id)}
                    icon="heart-fill"
                    color={COLORS.PRIMARY_100}
                  />
                </Content>
              </OrderArea>
            </Fragment>

          ))
        }

      </Container>
    </ScrollView>
  );
}
