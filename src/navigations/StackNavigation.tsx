import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  AuthLoadingScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  StartScreen,
} from '../screens';

import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthLoadingScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} />
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
      <Stack.Screen name="Home" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
