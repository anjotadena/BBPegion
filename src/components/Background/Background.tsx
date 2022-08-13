import React from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import theme from '../../core/theme';

type Props = {
  children: React.ReactNode;
};

const Background = ({children}: Props): React.ReactElement => (
  <View style={styles.background}>
    <KeyboardAvoidingView style={styles.container}>
      {children}
    </KeyboardAvoidingView>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.tint,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Background;
