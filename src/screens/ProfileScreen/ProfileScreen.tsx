import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';

import {Background} from '../../components';
import {RootStackParamList} from '../../types/app';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AuthLoadingScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const ProfileScreen = ({}: Props): React.ReactElement => {
  return (
    <Background>
      <Text>Profile Screen</Text>
    </Background>
  );
};

export default ProfileScreen;
