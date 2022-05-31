import React, { useState, useEffect } from 'react';

import { Category } from '../Category';
import { categories } from '../../utils/categories';

import { Container } from './styles';
import { firestore } from '../../services/firebase';

export function CategorySelect({ categorySelected, setCategory }) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const subscribe = firestore
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

    return () => subscribe();
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
