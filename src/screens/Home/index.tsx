import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import { Container } from './styles';

const Home: React.FC = () => {
  const {navigate} = useNavigation();

  const HandleNavigationToFavorites = () => {
    navigate('Favorites');
  };

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={HandleNavigationToFavorites}>
        <Text>Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
