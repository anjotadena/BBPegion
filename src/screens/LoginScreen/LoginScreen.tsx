import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {loginUser} from '../../api/auth';

import {Background, Logo} from '../../components';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';
import theme from '../../core/theme';
import {RootStackParamList} from '../../types/app';
import emailValidator from '../../utils/emailValidator';
import passwordValidator from '../../utils/passwordValidator';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AuthLoadingScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const RegisterScreen = ({navigation}: Props): React.ReactElement => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [loading, setLoading] = useState(false);

  const handleOnLoginPressed = async () => {
    console.log({email, password});
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
    }

    const passwordError = passwordValidator(password.value);

    if (passwordError) {
      setPassword({...password, error: passwordError});
    }

    if (emailError || passwordError) {
      return;
    }
    setLoading(true);
    const response = await loginUser({
      email: email.value,
      password: password.value,
    });

    setLoading(false);
    if (response?.error) {
      Alert.alert('Error', response.error);
    } else {
      setEmail({value: '', error: ''});
      setPassword({value: '', error: ''});
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome</Header>
      <TextInput
        label="Email"
        value={email.value}
        error={!!email.error}
        errorText={email.error}
        onChangeText={text => setEmail({value: text, error: ''})}
      />
      <TextInput
        secureTextEntry
        label="Password"
        value={password.value}
        error={!!password.error}
        errorText={password.error}
        onChangeText={text => setPassword({value: text, error: ''})}
      />
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.link}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button
        mode="contained"
        loading={loading}
        disabled={loading}
        onPress={handleOnLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign Up</Text>
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
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
});

export default RegisterScreen;
