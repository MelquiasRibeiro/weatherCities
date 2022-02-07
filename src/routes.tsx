import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Search from './screens/Search';
import Details from './screens/Details';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Search: undefined;
      Details: undefined;
    }
  }
}
const {Screen, Navigator} = createNativeStackNavigator();

function App() {
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

export default App;
