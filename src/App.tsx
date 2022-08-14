import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import firebase from 'firebase/app';
import React from 'react';
import {Provider} from 'react-native-paper';
import {HomeIcon, ProfileIcon} from './components';

import {firebaseConfig} from './core/config';
import theme from './core/theme';
import {
  AuthLoadingScreen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  RegisterScreen,
  ResetPasswordScreen,
  StartScreen,
} from './screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}): JSX.Element => <HomeIcon fill={color} />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}): JSX.Element => <ProfileIcon fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

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
          <Stack.Screen name="HomeScreen" component={BottomNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
