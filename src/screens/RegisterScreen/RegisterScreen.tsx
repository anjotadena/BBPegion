import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {RootStackParamList} from '../../app.types';
import {Background, Logo} from '../../components';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';
import theme from '../../core/theme';
import emailValidator from '../../utils/emailValidator';
import nameValidator from '../../utils/nameValidator';
import passwordValidator from '../../utils/passwordValidator';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AuthLoadingScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const LoginScreen = ({navigation}: Props): React.ReactElement => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const handleOnRegisterPressed = () => {
    console.log({email, password});
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
    }

    const passwordError = passwordValidator(password.value);

    if (passwordError) {
      setPassword({...password, error: passwordError});
    }

    const nameError = nameValidator(name.value);

    if (nameError) {
      setName({...name, error: nameError});
    }
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.goBack()} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        error={!!name.error}
        errorText={name.error}
        onChangeText={text => setEmail({value: text, error: ''})}
      />
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
      <Button mode="contained" onPress={handleOnRegisterPressed}>
        Register
      </Button>
      <View style={styles.row}>
        <Text>Already have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default LoginScreen;
