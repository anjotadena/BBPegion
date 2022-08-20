import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFormik} from 'formik';
import React, {useEffect} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';

import TextInput from '../../../../components/TextInput';
import {
  loginUser,
  selectError,
  selectStatus,
  STATUS_TYPE_LOADING,
} from '../../../../store/reducers/authReducer';
import {AppDispatch, useTypedSelector} from '../../../../store/store';
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
  // Dispatcher
  const dispatch = useDispatch<AppDispatch>();

  // Get the current `status`:
  const status = useTypedSelector(selectStatus);

  const loginError = useTypedSelector(selectError);

  // Use to navigate to another screen
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  // Handle form validation
  const {touched, handleChange, isValid, errors, handleSubmit} = useFormik({
    validationSchema,
    initialValues: FORM_INITIAL_VALUES,
    onSubmit: async values => dispatch(loginUser(values)),
  });

  // Listener for login error state
  useEffect(() => {
    if (loginError) {
      Alert.alert(loginError?.message);
    }
  }, [loginError]);

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
        loading={status === STATUS_TYPE_LOADING}
        disabled={!isValid}
        onPress={handleSubmit}>
        Login
      </Button>
    </>
  );
};

export default LoginForm;
