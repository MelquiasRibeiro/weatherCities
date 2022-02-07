import React, {useState} from 'react';
import {Text} from '../../components/Text';
import {Margin} from '../../components/Margin';
import SavedCityCard from '../../components/SavedCityCard';

import {useNavigation} from '@react-navigation/native';
import {
  Container,
  HeaderContainer,
  SerchButton,
  ContentContainer,
  EmptyContent,
} from './styles';
import {Icon} from '../../assets/images/icons';

const Home: React.FC = () => {
  const [savedCities, setSavedCities] = useState([
    {
      city: 'blumenaus',
      county: 'brasil',
      weater: 'Chuva fraca',
      temp: '18º',
      favorite: true,
      max: '14º',
      min: '22º',
    },
    {
      city: 'blumenaus',
      county: 'brasil',
      weater: 'Chuva fraca',
      temp: '18º',
      favorite: false,
      max: '14º',
      min: '22º',
    },
    {
      city: 'blumenaus',
      county: 'brasil',
      weater: 'Chuva fraca',
      temp: '18º',
      favorite: true,
      max: '14º',
      min: '22º',
    },
  ]);
  const {navigate} = useNavigation();

  const HandleNavigationToSearch = () => {
    navigate('Search');
  };

  return (
    <Container>
      <HeaderContainer>
        <Text weight="Medium" size={20} color="#f5f5f5">
          Cidades
        </Text>
        <SerchButton onPress={HandleNavigationToSearch}>
          <Icon.Serch />
        </SerchButton>
      </HeaderContainer>
      <ContentContainer>
        <Margin margin={16} />
        {!savedCities ? (
          <EmptyContent>
            <Margin margin={44} />
            <Text weight="Medium" size={20} color="#000000" align="center">
              {'Parece que você ainda não \n adicionou uma cidade'}
            </Text>
            <Margin margin={16} />
            <Text weight="Regular" size={16} color="#666666" align="center">
              Tente adicionar uma cidade usando o botão de busca
            </Text>
          </EmptyContent>
        ) : (
          savedCities.map(city => <SavedCityCard city={city} />)
        )}
      </ContentContainer>
    </Container>
  );
};

export default Home;
