import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

interface IProps {
    onPress: (value: string) => void,
    onSubmit: () => void,
    allowSubmit: boolean
}

export default class Keyboard extends Component<IProps> {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        allowSubmit: PropTypes.bool 
    }

    constructor(props: IProps) {
        super(props);
    }

    renderRow(numbersArray: number[]) {
        let cells = numbersArray.map((val) => this.renderCell(val));
        return (
            <View style={styles.row}>
                {cells}
            </View>
        );
    }

    renderCell(symbol: any) {
        return (
            <TouchableOpacity style={styles.cell} key={symbol} accessibilityLabel={symbol.toString()} onPress={() => { this.onPress(symbol.toString()) }}>
                <Text style={styles.number}>{symbol}</Text>
            </TouchableOpacity>
        );
    }

    renderBackspace() {
        return (
            <TouchableOpacity accessibilityLabel='backspace' style={[styles.cell, styles.backspace]} onPress={() => { this.onPress('back') }}>
                <Ionicons name="md-backspace" color={styles.number.color} size={styles.number.fontSize} />
            </TouchableOpacity>
        );
    }

    renderDone() {
        return (
            <TouchableOpacity accessibilityLabel='done' style={[this.props.allowSubmit? styles.cell : styles.inactiveCell, styles.done]} onPress={() => { this.onSubmit() }} disabled={!this.props.allowSubmit}>
                <Ionicons name="md-return-left" color={styles.number.color} size={styles.number.fontSize} />
            </TouchableOpacity>
        );
    }

    onPress(value: string) {
        this.props.onPress(value);
    }

    onSubmit() {
        this.props.onSubmit();
        this.setState({ text: '' });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderRow([1, 2, 3])}
                {this.renderRow([4, 5, 6])}
                {this.renderRow([7, 8, 9])}
                <View style={styles.row}>
                    {this.renderBackspace()}
                    {this.renderCell(0)}
                    {this.renderDone()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    number: {
        fontSize: 25,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    backspace: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cell: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1E90FF',
        margin: 5
    },
    done: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inactiveCell: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#C8C8C8',
        margin: 5
    }
});