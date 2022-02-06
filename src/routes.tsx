import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Favorites from './screens/Favorites';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Favorites: undefined;
    }
  }
}
const {Screen, Navigator} = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Favorites" component={Favorites} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
