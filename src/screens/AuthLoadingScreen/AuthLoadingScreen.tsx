import firebase from 'firebase/app';
import React from 'react';
import { ActivityIndicator } from 'react-native-paper';

import 'firebase/auth';

import { StackNavigationProp } from '@react-navigation/stack';
import { Alert } from 'react-native';
import { Background } from '../../components';
import { RootStackParamList } from '../../types/app';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AuthLoadingScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const AuthLoadingScreen = ({navigation}: Props): React.ReactElement => {
  firebase.auth().onAuthStateChanged(user => {
    // console.log(user, 'user');
    if (user) {
      Alert.alert('GO TO DRAWER');
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } else {
      navigation.reset({
        index: 0,
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
