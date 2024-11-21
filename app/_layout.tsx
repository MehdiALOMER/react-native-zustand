import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';

const Layout = () => {
  return (
    <View style={styles.container}>
      {/* Ortak düzen */}
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
});

export default Layout;
