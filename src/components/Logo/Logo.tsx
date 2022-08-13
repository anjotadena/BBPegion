import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = () => (
  <Image source={require('../../assets/logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 145,
    height: 160,
    marginBottom: 0,
  },
});

export default Logo;
