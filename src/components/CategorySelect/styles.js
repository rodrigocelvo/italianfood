import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

export const Container = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  min-height: 180px;
  max-height: 200px;
`;
