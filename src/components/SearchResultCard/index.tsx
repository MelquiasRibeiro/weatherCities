import React, {useContext} from 'react';
import {Alert} from 'react-native';
import {Container, TextButton} from './styles';
import {Text} from '../Text';
import {Margin} from '../Margin';
import {City} from '../../types/Icity';
import api from '../../services/api';
import {SavedCitiesContext} from '../../providers/MyCities';
import {useNavigation} from '@react-navigation/native';

interface ISearchResultCardProps {
  city: City;
}

const SearchResultCard: React.FC<ISearchResultCardProps> = ({city}) => {
  const {saveCity} = useContext(SavedCitiesContext);
  const navigate = useNavigation();

  async function handleAddCitie() {
    try {
      const {data} = await api.get('weather', {
        params: {
          q: city.nome,
        },
      });
      saveCity(data);
      Alert.alert('Pronto', 'Cidade adicionada com sucesso', [
        {
          text: 'Ok',
          onPress: () => navigate.goBack(),
        },
      ]);
    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'Não encontramos os dados desta cidade', [
        {
          text: 'voltar',
        },
      ]);
    }
  }

  return (
    <Container>
      <Text weight="Regular" size={24} color="#000000">
        {city?.nome}
      </Text>
      <Text weight="Regular" lineHeight={20} size={14} color="#000000">
        Brasil
      </Text>
      <Margin margin={20} />
      <TextButton onPress={handleAddCitie}>
        <Text weight="Medium" lineHeight={16} size={14} color="#0078be">
          ADICIONAR
        </Text>
      </TextButton>
    </Container>
  );
};

export default SearchResultCard;
