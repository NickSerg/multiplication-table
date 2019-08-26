import React from 'react';
import { StyleSheet, View } from 'react-native';
import Training from './src/training';

export default function App() {
  return (
    <View style={styles.container}>
      <Training></Training>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
