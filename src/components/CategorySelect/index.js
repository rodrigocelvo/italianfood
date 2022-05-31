import React, { useState, useEffect } from 'react';

import { Category } from '../Category';;

import { Container } from './styles';
import { firestore } from '../../services/firebase';

export function CategorySelect({ categorySelected, setCategory }) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {

      firestore
        .collection("categories")
        .orderBy('name_insensitive')
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          setCategories(data);
        });
    }
    return () => { isMounted = false }
  }, []);

  return (
    <Container>
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.name}
          image_url={category.image_url}
          selected={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </Container>
  );
}
