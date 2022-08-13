import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

type Props = {
  children: React.ReactNode;
};

const Paragraph = (props: Props): React.ReactElement => (
  <Text style={styles.paragraph} {...props} />
);

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
});

export default Paragraph;
