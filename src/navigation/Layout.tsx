import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SCREENS} from '../types';
import Map from '../screens/Map/Map';

export type RootStackParamList = {
  [SCREENS.MAP]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.MAP} component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
