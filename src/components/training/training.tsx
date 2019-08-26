import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Keyboard from "./keyboard";

interface IState {
    answer: string
}

export default class Training extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            answer: '',
        };
    }

    textInput(text: string): void {
        this.setState({answer: text});
    }

    check(): void {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.answer}</Text>
                <Keyboard onPress={(text) => this.textInput(text)} onSubmit={() => this.check()}></Keyboard>
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