import firebase from 'firebase/app';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';

import {StackNavigationProp} from '@react-navigation/stack';
import {Background} from '../../components';
import {RootStackParamList} from '../../types/app';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AuthLoadingScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const AuthLoadingScreen = ({navigation}: Props): React.ReactElement => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      navigation.reset({
        routes: [{name: 'HomeScreen'}],
      });
    } else {
      navigation.reset({
        routes: [{name: 'StartScreen'}],
      });
    }
  });

  return (
    <Background>
      <ActivityIndicator size="large" />
    </Background>
  );
};

export default AuthLoadingScreen;
