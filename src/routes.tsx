import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Search from './screens/Search';
import Details from './screens/Details';
import {Weather} from './types/IWeather';
import {SavedCitiesContext} from './providers/MyCities';
import AsyncStorage from '@react-native-async-storage/async-storage';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Search: undefined;
      Details: {
        city?: Weather;
      };
    }
  }
}
const {Screen, Navigator} = createNativeStackNavigator();

function Routes() {
  const {recoveryData} = useContext(SavedCitiesContext);

  const getSavedData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@saved-cities');
      if (jsonValue !== null) {
        recoveryData(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSavedData();
  }, []);
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="Search" component={Search} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
