import React from 'react';
import {ActivityIndicator} from 'react-native-paper';

import 'firebase/auth';

import {Background} from '../../components';

type Props = {};

const AuthLoadingScreen = ({}: Props): React.ReactElement => {
  return (
    <Background>
      <ActivityIndicator size="large" />
    </Background>
  );
};

export default AuthLoadingScreen;
