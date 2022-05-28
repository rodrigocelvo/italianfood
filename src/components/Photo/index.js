import React from 'react';

import { Image, Placeholder, PlaceholderTitle } from './styles';

export function Photo({ uri }) {
  if (uri) {
    return <Image source={{ uri }} />;
  }

  return (
    <Placeholder>
      <PlaceholderTitle>Nenhuma foto{'\n'} carregada.</PlaceholderTitle>
    </Placeholder>
  );
}
