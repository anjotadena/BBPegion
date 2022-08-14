import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';

import {RootStackParamList} from '../../app.types';
import {Background} from '../../components';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AuthLoadingScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const HomeScreen = ({}: Props): React.ReactElement => {
  return (
    <Background>
      <Text>Home Screen</Text>
    </Background>
  );
};

export default HomeScreen;
