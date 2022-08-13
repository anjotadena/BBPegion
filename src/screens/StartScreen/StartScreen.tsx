import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Paragraph} from 'react-native-paper';

import {RootStackParamList} from '../../app.types';
import {Background, Logo} from '../../components';
import Button from '../../components/Button';
import Header from '../../components/Header';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AuthLoadingScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const StartScreen = ({navigation}: Props): React.ReactElement => {
  return (
    <Background>
      <Logo />
      <Header>My App1</Header>
      <Paragraph>Let's start!</Paragraph>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button mode="contained">Sign Up</Button>
    </Background>
  );
};

export default StartScreen;
