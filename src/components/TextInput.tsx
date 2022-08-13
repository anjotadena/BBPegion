import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput as Input} from 'react-native-paper';

import theme from '../core/theme';

type Props = React.ComponentProps<typeof Input> & {
  errorText?: string;
  description?: string;
};

const TextInput = ({
  errorText,
  description,
  ...props
}: Props): React.ReactElement => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {description && !errorText && (
      <Text style={styles.description}>{description}</Text>
    )}
    {errorText && <Text style={styles.error}>{errorText}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.backdrop,
    paddingTop: 0,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 0,
  },
});

export default TextInput;
