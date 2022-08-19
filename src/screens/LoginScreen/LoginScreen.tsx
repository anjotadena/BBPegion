import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Background, Logo} from '../../components';
import BackButton from '../../components/BackButton/BackButton';
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin';
import Header from '../../components/Header';
import {RootStackParamList} from '../../types/app';
import {LoginForm} from './components';
import styles from './style';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AuthLoadingScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const RegisterScreen = ({navigation}: Props): React.ReactElement => {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome</Header>
      <LoginForm onLogin={() => {}} />
      <GoogleLogin />
      <View style={styles.row}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default RegisterScreen;
