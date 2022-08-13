import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {TextInput as Input} from 'react-native-paper';

import theme from '../core/theme';

type TextInputProps = {
  error?: string;
  description?: string;
  label?: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

const TextInput = ({
  error,
  description,
  label,
  onChange,
}: TextInputProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        label={label}
        onChange={onChange}
      />
      {description && !error && (
        <Text style={styles.description}>{description}</Text>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

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
    color: theme.colors.secondary,
    paddingTop: 0,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 0,
  },
});

export default TextInput;
