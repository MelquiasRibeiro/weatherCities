import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Icon} from '../../assets/images/icons';
import {
  Container,
  HeaderContainer,
  SerchInput,
  CancelButton,
  ContentContainer,
} from './styles';
import SearchResultCard from '../../components/SearchResultCard';
import {Margin} from '../../components/Margin';
import useDebounce from '../../hooks/useDebounce';
import {City} from '../../types/Icity';

const Search: React.FC = () => {
  const navigate = useNavigation();
  const [displayValue, setDisplayValue] = useState('');
  const [cities, setCities] = useState<City[]>([]);
  const [displayedCities, setDisplayedCities] = useState<City[]>([]);

  async function getAllCities() {
    try {
      const {data} = await axios.get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/distritos',
      );

      setCities(data);
      console.log('acabou');
    } catch (error) {
      console.log(error);
    }
  }

  const findCity = (cityName: string) => {
    const filterdCities = cities.filter(city => {
      return city?.nome.toLowerCase().includes(cityName[0]);
    });
    console.log('filterdCities', filterdCities);
    setDisplayedCities(filterdCities);
  };

  const debouncedChage = useDebounce(findCity, 1000);
  const HandleChage = (text: string) => {
    setDisplayValue(text);
    if (text.length >= 3) {
      debouncedChage(text);
    }
  };
  const HandleNavigationGoBack = () => {
    navigate.goBack();
  };

  useEffect(() => {
    getAllCities();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <CancelButton onPress={HandleNavigationGoBack}>
          <Icon.Close />
        </CancelButton>
        <SerchInput
          value={displayValue}
          onChangeText={text => HandleChage(text)}
          autoFocus={true}
        />
      </HeaderContainer>
      <ContentContainer>
        <Margin margin={16} />
        {displayedCities.map(city => (
          <SearchResultCard key={city?.id} city={city} />
        ))}
      </ContentContainer>
    </Container>
  );
};

export default Search;
