import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFormik} from 'formik';
import React, {useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import * as yup from 'yup';
import {loginUser} from '../../../../api/auth';

import TextInput from '../../../../components/TextInput';
import {RootStackParamList} from '../../../../types/app';
import styles from './styles';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const FORM_INITIAL_VALUES: {email: string; password: string} = {
  email: '',
  password: '',
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AuthLoadingScreen'
>;

type Props = {};

const LoginForm = ({}: Props): React.ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const {touched, handleChange, isValid, errors, handleSubmit} = useFormik({
    validationSchema,
    initialValues: FORM_INITIAL_VALUES,
    onSubmit: async values => {
      setLoading(true);

      const response = await loginUser(values);

      setLoading(false);

      if (response.error) {
        Alert.alert(response.error);
      }
    },
  });

  return (
    <>
      <TextInput
        label="Email"
        error={touched.email && !!errors.email}
        errorText={errors.email}
        onChangeText={handleChange('email')}
      />
      <TextInput
        secureTextEntry
        label="Password"
        error={touched.password && !!errors.password}
        errorText={errors.password}
        onChangeText={handleChange('password')}
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
        disabled={!isValid}
        onPress={handleSubmit}>
        Login
      </Button>
    </>
  );
};

export default LoginForm;
