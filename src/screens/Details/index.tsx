import React, {useContext, useEffect, useState} from 'react';
import {Icon} from '../../assets/images/icons';
import {Text} from '../../components/Text';
import {SavedCitiesContext} from '../../providers/MyCities';
import {ActivityIndicator} from 'react-native';
import {Margin} from '../../components/Margin';
import {
  Container,
  HeaderContainer,
  BackButton,
  ContentContainer,
} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import api from '../../services/api';
import DetailsCard from '../../components/DetailsCard';
import {Detail} from '../../types/IDetails';

const Details: React.FC = () => {
  const [historicall, setHistoricall] = useState<Detail[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigation();
  const route = useRoute();
  const {removeCity} = useContext(SavedCitiesContext);

  const {city} = route.params;

  async function getHistoricall() {
    setLoading(true);
    try {
      const {data} = await api.get('/onecall', {
        params: {
          lat: city.coord.lat,
          lon: city.coord.lon,
          exclude: 'current,hourly,minutely,alerts',
        },
      });
      setHistoricall(data?.daily);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getHistoricall();
  }, []);

  const HandleNavigationGoBack = () => {
    navigate.goBack();
  };

  const HandleDelete = () => {
    removeCity(city.name);
    navigate.goBack();
  };

  return (
    <Container>
      <HeaderContainer>
        <BackButton onPress={HandleNavigationGoBack}>
          <Icon.ArrowLeft />
        </BackButton>
        <Text weight="Medium" size={20} color="#f5f5f5">
          {city.name}
        </Text>
        <BackButton onPress={() => HandleDelete()}>
          <Icon.Waste />
        </BackButton>
      </HeaderContainer>
      <ContentContainer>
        <Margin margin={16} />
        <Text weight="Medium" align="center" size={12} color="#000000">
          {'Previsão para os próximos 7 dias'}
        </Text>
        <Margin margin={16} />
        {loading ? (
          <ActivityIndicator />
        ) : (
          historicall.map((day: Detail) => (
            <DetailsCard wather={day} key={day.dt} />
          ))
        )}
      </ContentContainer>
    </Container>
  );
};

export default Details;
