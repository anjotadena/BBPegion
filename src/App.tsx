import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as ReactNativePaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import FirebaseProvider from './context/FirebaseContext';
import theme from './core/theme';
import StackNavigation from './navigations/StackNavigation';
import {store} from './store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ReactNativePaperProvider theme={theme}>
        <NavigationContainer>
          <FirebaseProvider>
            <StackNavigation />
          </FirebaseProvider>
        </NavigationContainer>
      </ReactNativePaperProvider>
    </ReduxProvider>
  );
};

export default App;
