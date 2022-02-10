import React from 'react';
import {Text} from '../Text';
import {Margin} from '../Margin';
import {Container, ColumContainer, RowContinaer} from './styles';
import {getFormatedDate, getWeekDay} from '../../utils/convertDate';
import {Detail} from '../../types/IDetails';

interface IDetail {
  wather: Detail;
}

const DetailsCard: React.FC<IDetail> = ({wather}) => {
  return (
    <Container>
      <RowContinaer>
        <ColumContainer>
          <Text weight="Regular" size={24} color="#000000">
            {getWeekDay(wather.dt)}
          </Text>
          <Text weight="Regular" lineHeight={20} size={14} color="#000000">
            {getFormatedDate(wather.dt)}
          </Text>
        </ColumContainer>
        <Text weight="Regular" size={34} color="#f28200">
          {wather.temp.day}°
        </Text>
      </RowContinaer>
      <Margin margin={13} />
      <RowContinaer>
        <ColumContainer>
          <Text weight="Regular" lineHeight={20} size={14} color="#f28200">
            {wather.weather[0].description}
          </Text>
          <Margin margin={2} />
          <Text weight="Regular" lineHeight={16} size={12} color="#000000">
            {`${wather.temp.min}° - ${wather.temp.max}°`}
          </Text>
        </ColumContainer>
      </RowContinaer>
    </Container>
  );
};

export default DetailsCard;
