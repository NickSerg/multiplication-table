import React from 'react';
import { StyleSheet, View } from 'react-native';
import Training from './src/components/training/training';
import NavigationBar from 'react-native-navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationBar
        title={titleConfig}
      />
      <Training></Training>
    </View>
  );
}

const titleConfig = {
  title: 'Training',
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
