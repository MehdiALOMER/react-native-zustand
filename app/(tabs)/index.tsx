import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import useStore from '../../store/count';

export default function HomeScreen() {

  const { count, increaseCount, decreaseCount } = useStore();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <Button title="Increase" onPress={increaseCount} />
      <Button title="Decrease" onPress={decreaseCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 32,
    marginBottom: 20,
  },
});