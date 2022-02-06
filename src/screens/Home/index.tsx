import React from 'react';
import {Text} from '../../components/Text';
import {Margin} from '../../components/Margin';

import {useNavigation} from '@react-navigation/native';
import {
  Container,
  HeaderContainer,
  ContentContainer,
  EmptyContent,
} from './styles';
import {Icon} from '../../assets/images/icons';
const Home: React.FC = () => {
  const {navigate} = useNavigation();

  const HandleNavigationToFavorites = () => {
    navigate('Favorites');
  };

  return (
    <Container>
      <HeaderContainer>
        <Text weight="Medium" size={20} color="#f5f5f5">
          Cidades
        </Text>
        <Icon.Serch />
      </HeaderContainer>
      <ContentContainer>
        <EmptyContent>
          <Margin margin={60} />
          <Text weight="Medium" size={20} color="#000000" align="center">
            {'Parece que você ainda não \n adicionou uma cidade'}
          </Text>
          <Margin margin={16} />
          <Text weight="Regular" size={16} color="#666666" align="center">
            Tente adicionar uma cidade usando o botão de busca
          </Text>
        </EmptyContent>
      </ContentContainer>
    </Container>
  );
};

export default Home;
