import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';

import {RootStackParamList} from '../../app.types';
import {Background, Logo} from '../../components';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';
import emailValidator from '../../utils/emailValidator';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AuthLoadingScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const ResetPasswordScreen = ({navigation}: Props): React.ReactElement => {
  const [email, setEmail] = useState({value: '', error: ''});

  const handleOnSubmitPressed = () => {
    console.log({email});
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="Email"
        error={!!email.error}
        errorText={email.error}
        onChangeText={text => setEmail({value: text, error: ''})}
        description="You will receive email with password reset link."
      />

      <Button mode="contained" onPress={handleOnSubmitPressed}>
        Send Instructions
      </Button>
    </Background>
  );
};

export default ResetPasswordScreen;
