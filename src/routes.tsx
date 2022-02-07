import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Search from './screens/Search';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Search: undefined;
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
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
