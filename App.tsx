import React from 'react';
import { StyleSheet, View } from 'react-native';
import Training from './src/components/training/training';
import NavigationBar from 'react-native-navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationBar title={titleConfig} style={styles.navigationBar}/>
      <Training></Training>
    </View>
  );
}

const titleConfig = {
  title: 'Training',
  tintColor: '#FFFFFF'
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigationBar: {
    backgroundColor: "#1E90FF"
  }
});
