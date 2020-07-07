import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Importing Screens
import HomePage from './screens/homepage';
import PrecautionScreen from './screens/precaution';

import { StatusBar } from 'react-native';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#021B79" barStyle="light-content" />
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Precaution" component={PrecautionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
