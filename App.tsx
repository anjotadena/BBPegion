import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {Button, Provider} from 'react-native-paper';

import theme from './src/core/theme';

const Stack = createStackNavigator();

const Screen1 = () => (
  <SafeAreaView>
    <StatusBar />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text>Hello, World!</Text>
        <Button>Click Me!</Button>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="My App" component={Screen1} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
