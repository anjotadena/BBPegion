import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import firebase from 'firebase/app';
import React from 'react';
import {Provider} from 'react-native-paper';

import {firebaseConfig} from './core/config';
import theme from './core/theme';
import {
  AuthLoadingScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  StartScreen,
} from './screens';

const Stack = createStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthLoadingScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
