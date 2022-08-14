import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {signUpUser} from '../../api/auth';

import {Background, Logo} from '../../components';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';
import theme from '../../core/theme';
import {RootStackParamList} from '../../types/app';
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

// @TODO
// Refactor this logic
const RegisterScreen = ({navigation}: Props): React.ReactElement => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [loading, setLoading] = useState(false);

  const handleOnRegisterPressed = async () => {
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

    if (nameError || emailError || passwordError) {
      return;
    }

    setLoading(true);
    const response = await signUpUser({
      email: email.value,
      name: name.value,
      password: password.value,
    });

    if (response?.error) {
      Alert.alert('Error', response?.error);
    } else {
      Alert.alert('Success', response?.user?.displayName);

      setName({value: '', error: ''});
      setEmail({value: '', error: ''});
      setPassword({value: '', error: ''});
    }
    setLoading(false);
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
        onChangeText={text => setName({value: text, error: ''})}
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
      <Button
        mode="contained"
        loading={loading}
        onPress={handleOnRegisterPressed}>
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

export default RegisterScreen;
