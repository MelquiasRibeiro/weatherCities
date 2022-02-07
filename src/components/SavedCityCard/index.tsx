import React from 'react';
import {Text} from '../Text';
import {Margin} from '../Margin';
import {Container, ColumContainer, RowContinaer} from './styles';
import {Icon} from '../../assets/images/icons';
import {useNavigation} from '@react-navigation/native';

const SavedCityCard: React.FC = ({city}) => {
  const {navigate} = useNavigation();

  const HandleNavigationToDetails = () => {
    navigate('Details');
  };
  return (
    <Container onPress={HandleNavigationToDetails}>
      <RowContinaer>
        <ColumContainer>
          <Text weight="Regular" size={24} color="#000000">
            {city.city}
          </Text>
          <Text weight="Regular" lineHeight={20} size={14} color="#000000">
            {city.county}
          </Text>
        </ColumContainer>
        <Text weight="Regular" size={34} color="#f28200">
          {city.temp}
        </Text>
      </RowContinaer>
      <Margin margin={13} />
      <RowContinaer>
        <ColumContainer>
          <Text weight="Regular" lineHeight={20} size={14} color="#f28200">
            {city.weater}
          </Text>
          <Margin margin={2} />
          <Text weight="Regular" lineHeight={16} size={12} color="#000000">
            {`${city.max} - ${city.min}`}
          </Text>
        </ColumContainer>
        {city.favorite ? <Icon.Hearth /> : <Icon.HearthOutlined />}
      </RowContinaer>
    </Container>
  );
};

export default SavedCityCard;
