import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { FoodCard } from '../FoodCard';
import { firestore } from '../../services/firebase';


export function FoodList({ handleViewProduct, search, category }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {

      firestore
        .collection("products")
        .orderBy('name_insensitive')
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          setProducts(data);
        });
    }
    return () => { isMounted = false }
  }, []);


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
      .catch(() => Alert.alert('Erro ao buscar produtos'));
  }

  if (search) {
    fecthProducts(search)
  }
  else {
    fecthProducts('')
  }

  return (
    <Container>

      {
        products.map((food) => (
          <FoodCard
            key={food.id}
            data={food}
            onPress={() => handleViewProduct(food.id)}
          />
        ))
      }

    </Container>
  );
}
