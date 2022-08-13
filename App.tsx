import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-native-paper';
import Button from './src/components/Button';
import Header from './src/components/Header';
import TextInput from './src/components/TextInput';

import theme from './src/core/theme';
import {StartScreen} from './src/screens';

const Stack = createStackNavigator();

const Screen2 = ({navigation}: any) => (
  <View>
    <Header>SCREEN 2</Header>
    <TextInput label="Email" />
    <Button mode="contained" onPress={() => navigation.replace('Screen3')}>
      Click Me!
    </Button>
  </View>
);

const Screen3 = ({navigation}: any) => (
  <View>
    <Header>SCREEN 3</Header>
    <TextInput label="Email" />
    <Button mode="contained" onPress={() => navigation.goBack()}>
      Go back
    </Button>
  </View>
);

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
