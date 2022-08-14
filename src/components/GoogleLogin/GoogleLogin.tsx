import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import theme from '../../core/theme';
import {GoogleLogo} from '../GoogleLogo';

GoogleSignin.configure();

const GoogleLogin = () => {
  const handleOnPressSignInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
    } catch (error: any) {
      if (error?.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        Alert.alert('Error', 'user cancelled the login flow!');
      } else if (error?.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        Alert.alert(
          'Error',
          'operation (e.g. sign in) is in progress already!'
        );
      } else if (error?.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        Alert.alert('Error', 'play services not available or outdated!');
      } else {
        // some other error happened
        Alert.alert('Error', 'Failed to login google authentication!');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.divider}>
        <Text style={styles.dividerText}>Or</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleOnPressSignInGoogle}>
          <GoogleLogo />
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  divider: {
    position: 'relative',
    width: '96%',
    height: 1,
    backgroundColor: theme.colors.text,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerText: {
    position: 'absolute',
    backgroundColor: theme.colors.tint,
    color: theme.colors.text,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 12,
  },
  button: {
    flexDirection: 'row',
    borderColor: theme.colors.google,
    backgroundColor: theme.colors.surface,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  buttonText: {
    paddingLeft: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 15,
  },
});

export default GoogleLogin;
