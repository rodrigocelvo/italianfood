import React from 'react';

import { categories } from '../../utils/categories';

import { Category } from '../Category';

import { Container } from './styles';

export function CategorySelect({ categorySelected, setCategory }) {
  return (
    <Container>
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          image_url={category.image_url}
          selected={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </Container>
  );
}
