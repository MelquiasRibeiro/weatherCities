import React from 'react';
import {Icon} from '../../assets/images/icons';
import {
  Container,
  HeaderContainer,
  SerchInput,
  CancelButton,
  ContentContainer,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import SearchResultCard from '../../components/SearchResultCard';
import {Margin} from '../../components/Margin';

const Search: React.FC = () => {
  const navigate = useNavigation();

  const HandleNavigationGoBack = () => {
    navigate.goBack();
  };

  return (
    <Container>
      <HeaderContainer>
        <CancelButton onPress={HandleNavigationGoBack}>
          <Icon.Close />
        </CancelButton>
        <SerchInput autoFocus={true} />
      </HeaderContainer>
      <ContentContainer>
        <Margin margin={16} />
        <SearchResultCard />
      </ContentContainer>
    </Container>
  );
};

export default Search;
