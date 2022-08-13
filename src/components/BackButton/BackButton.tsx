import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

type Props = {
  goBack: () => void;
};

const BackButton = ({goBack}: Props) => {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        source={require('../../assets/arrow_back.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default BackButton;
