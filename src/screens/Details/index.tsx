import React from 'react';
import {Icon} from '../../assets/images/icons';
import {Text} from '../../components/Text';
import {Margin} from '../../components/Margin';
import {
  Container,
  HeaderContainer,
  BackButton,
  ContentContainer,
} from './styles';
import {useNavigation} from '@react-navigation/native';

const Details: React.FC = () => {
  const navigate = useNavigation();

  const HandleNavigationGoBack = () => {
    navigate.goBack();
  };
  return (
    <Container>
      <HeaderContainer>
        <BackButton onPress={HandleNavigationGoBack}>
          <Icon.ArrowLeft />
        </BackButton>
        <Text weight="Medium" size={20} color="#f5f5f5">
          Blumenau
        </Text>
      </HeaderContainer>
      <ContentContainer>
        <Margin margin={16} />
        <Text weight="Medium" align="center" size={12} color="#000000">
          Previsão para os próximos 5 dias
        </Text>
        <Margin margin={16} />
      </ContentContainer>
    </Container>
  );
};

export default Details;
