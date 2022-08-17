import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-native-paper';
import FirebaseProvider from './context/FirebaseContext';
import theme from './core/theme';
import StackNavigation from './navigations/StackNavigation';

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <FirebaseProvider>
          <StackNavigation />
        </FirebaseProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
