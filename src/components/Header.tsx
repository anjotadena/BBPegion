import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import theme from '../core/theme';

type Props = {
  children: React.ReactNode;
};

const Header = (props: Props): React.ReactElement => (
  <Text style={styles.header} {...props} />
);

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    paddingVertical: 12,
  },
});

export default Header;
