import React from 'react';

import {Container, TextButton} from './styles';
import {Text} from '../Text';
import {Margin} from '../Margin';

const SearchResultCard: React.FC = () => {
  return (
    <Container>
      <Text weight="Regular" size={24} color="#000000">
        Blumenau
      </Text>
      <Text weight="Regular" lineHeight={20} size={14} color="#000000">
        Brasil
      </Text>
      <Margin margin={20} />
      <TextButton>
        <Text weight="Medium" lineHeight={16} size={14} color="#0078be">
          ADICIONAR
        </Text>
      </TextButton>
    </Container>
  );
};

export default SearchResultCard;
