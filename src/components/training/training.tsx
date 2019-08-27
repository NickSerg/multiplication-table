import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Keyboard from "./keyboard";
import { random } from '../../utils';

interface IState {
    example: { a: number, b: number },
    answer: string,
    isCorrect: boolean
}

const TIME_TO_ANSWER: number = 10000;
const NEXT_EXAMPLE_TIMEOUT: number = 1000;

export default class Training extends Component<{}, IState> {
    timer: number;

    constructor(props: any) {
        super(props);
        this.state = {
            answer: '',
            isCorrect: null,
            example: {
                a: null, b: null
            }
        };
    }

    componentDidMount() {
        this.nextExample();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    textInput(text: string): void {
        let curText = this.state.answer;
        if (text === 'back') {
            curText = curText.slice(0, -1);
        } else {
            if (curText.length === 2) {
                return;
            }

            curText += text;
        }
        this.setState({ answer: curText });

    }

    check(): void {
        clearTimeout(this.timer);
        const answer = Number.parseInt(this.state.answer)
        const { a, b } = this.state.example;
        this.setState({
            isCorrect: a * b === answer,
        });

        setTimeout(() => this.nextExample(), NEXT_EXAMPLE_TIMEOUT);
    }

    getAnswerContainerStyle(): any {
        return this.state.isCorrect
        ? styles.correctAnswerContainer
        : this.state.isCorrect != null
            ? styles.incorrectAnswerContainer
            : null;
    }

    getAnswerStyle(): any {
        return this.state.isCorrect
            ? styles.correctAnswer
            : this.state.isCorrect != null
                ? styles.incorrectAnswer
                : null;
    }

    nextExample() {
        clearTimeout(this.timer);

        const a = random(1, 9);
        const b = random(1, 9);
        this.setState({
            example: { a, b },
            isCorrect: null,
            answer: ''
        });

        this.timer = setTimeout(() => {
            const answer = this.state.answer;
            const correctAnswer = (a * b).toString();
            this.setState({
                answer: correctAnswer,
                isCorrect:  answer == correctAnswer
            });
            setTimeout(() => this.nextExample(), NEXT_EXAMPLE_TIMEOUT);
        }, TIME_TO_ANSWER);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.exampleContainer, this.getAnswerContainerStyle()]}>
                    <View style={styles.example}>
                        <Text style={styles.exampleItem}>{this.state.example.a}</Text>
                        <Text style={styles.exampleItem}>x</Text>
                        <Text style={styles.exampleItem}>{this.state.example.b}</Text>
                        <Text style={styles.exampleItem}>=</Text>
                        <Text style={[styles.exampleItem, this.getAnswerStyle()]}>{this.state.answer}</Text>
                    </View>
                </View>
                <Keyboard allowSubmit={this.state.answer.length > 0} onPress={(text) => this.textInput(text)} onSubmit={()=> this.check()}></Keyboard>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        justifyContent: 'flex-start'
    },
    exampleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    example: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        margin: 5
    },
    exampleItem: {
        flex: 1,
        color: '#1E90FF',
        fontSize: 48,
    },
    correctAnswer: {
        color: 'green'
    },
    incorrectAnswer: {
        color: 'red'
    },
    keyboard: {
        flex: 1
    },
    correctAnswerContainer: {
        backgroundColor: 'limegreen'
    },
    incorrectAnswerContainer: {
        backgroundColor: 'salmon'
    }
});