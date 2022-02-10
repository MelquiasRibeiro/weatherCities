import React, {useContext} from 'react';
import {Text} from '../../components/Text';
import {Margin} from '../../components/Margin';
import SavedCityCard from '../../components/SavedCityCard';
import {SavedCitiesContext} from '../../providers/MyCities';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  HeaderContainer,
  SerchButton,
  ContentContainer,
  EmptyContent,
  SettingsButton,
  RowContinaer,
} from './styles';
import {Icon} from '../../assets/images/icons';

const Home: React.FC = () => {
  const {cities} = useContext(SavedCitiesContext);

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
        <RowContinaer>
          <SettingsButton>
            <Icon.GearIcon />
          </SettingsButton>
          <SerchButton onPress={HandleNavigationToSearch}>
            <Icon.Serch />
          </SerchButton>
        </RowContinaer>
      </HeaderContainer>
      <ContentContainer>
        <Margin margin={16} />
        {cities.length === 0 ? (
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
          cities.map(city => <SavedCityCard key={city.id} city={city} />)
        )}
      </ContentContainer>
    </Container>
  );
};

export default Home;
