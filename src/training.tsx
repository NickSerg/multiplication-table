import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Training extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Training component hasn't implemented</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start'
    }
  });