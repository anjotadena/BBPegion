import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {Button, Provider} from 'react-native-paper';

import theme from './src/core/theme';

const App = () => {
  return (
    <Provider theme={theme}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Hello, World!</Text>
            <Button>Click Me!</Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
