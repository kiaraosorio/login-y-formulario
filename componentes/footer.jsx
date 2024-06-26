import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>programación web 2023</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    bottom: 0,
    width: '100%',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#333333',
    fontSize: 14,
  },
});

export default Footer;
