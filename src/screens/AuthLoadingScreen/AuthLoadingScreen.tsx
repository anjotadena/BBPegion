import React from 'react';
import {ActivityIndicator} from 'react-native-paper';

import {Background} from '../../components';

const AuthLoadingScreen = (): React.ReactElement => {
  return (
    <Background>
      <ActivityIndicator size="large" />
    </Background>
  );
};

export default AuthLoadingScreen;
