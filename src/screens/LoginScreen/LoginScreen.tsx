import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';

import {RootStackParamList} from '../../app.types';
import {Background, Logo} from '../../components';
import Button from '../../components/Button';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';
import emailValidator from '../../utils/emailValidator';
import passwordValidator from '../../utils/passwordValidator';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AuthLoadingScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const LoginScreen = ({}: Props): React.ReactElement => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const handleOnLoginPressed = () => {
    console.log({email, password});
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
    }

    const passwordError = passwordValidator(password.value);

    if (passwordError) {
      setPassword({...password, error: passwordError});
    }
  };

  return (
    <Background>
      <Logo />
      <Header>Welcome</Header>
      <TextInput
        label="Email"
        error={!!email.error}
        errorText={email.error}
        onChangeText={text => setEmail({value: text, error: ''})}
      />
      <TextInput
        secureTextEntry
        label="Password"
        error={!!password.error}
        errorText={password.error}
        onChangeText={text => setPassword({value: text, error: ''})}
      />
      <Button mode="contained" onPress={handleOnLoginPressed}>
        Login
      </Button>
    </Background>
  );
};

export default LoginScreen;
