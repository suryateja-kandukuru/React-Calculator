import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import KeypadBtn from '../components/Button'
import InvertibleScrollView from 'react-native-invertible-scroll-view'

export default function Calculator() {
    const [expression, setExpression] = useState('')

    const handelChange = (eve) => {
        setExpression(expression + eve)
    }

    const clearResult = () => {
        setExpression('')
    }

    const delInput = () => {
        setExpression(expression.toString().slice(0, -1))
    }

    const evaluateResult = () => {
        const operators = ['/', '*', '-', '+', '%', '.']
        if(expression !== '') {
        if (operators.includes(expression[expression.length - 1])) {
            const validatedResult = expression.slice(0, -1)
            const result = eval(validatedResult)
            setExpression(String(result))
        } else {
            const result = eval(expression)
            setExpression(String(result))
        }
        }
    }

    return (
        <View style={styles.calculator}>

           <InvertibleScrollView style={{ backgroundColor:'black' }}
           horizontal={true}
           showsHorizontalScrollIndicator={false} inverted>
                <Text style={styles.expression}>
                    {expression}
                </Text>
            </InvertibleScrollView>

            <View style={styles.keypad}>
                <View className="row1" style={styles.keypadRow}>
                    <KeypadBtn style={styles.keypadButton, styles.darKBtn} clearResult={clearResult}>C</KeypadBtn>
                    <KeypadBtn style={styles.keypadButton, styles.darKBtn} handelChange={handelChange}>/</KeypadBtn>
                    <KeypadBtn style={styles.keypadButton, styles.darKBtn} handelChange={handelChange}>*</KeypadBtn>
                    <KeypadBtn style={styles.keypadButton, styles.darKBtn} delInput={delInput}>DEL</KeypadBtn>
                </View>
                <View className="row2" style={styles.keypadRow}>
                    <KeypadBtn style={styles.keypadButton} handelChange={handelChange}>7</KeypadBtn>
                    <KeypadBtn style={styles.keypadButton} handelChange={handelChange}>8</KeypadBtn>
                    <KeypadBtn style={styles.keypadButton} handelChange={handelChange}>9</KeypadBtn>
                    <KeypadBtn style={styles.keypadButton, styles.darKBtn} handelChange={handelChange}>-</KeypadBtn>
                </View>
                <View className="row3" style={styles.keypadRow}>
                    <KeypadBtn style={styles.keypadButton} handelChange={handelChange}>4</KeypadBtn>
                    <KeypadBtn style={styles.keypadButton} handelChange={handelChange}>5</KeypadBtn>
                    <KeypadBtn style={styles.keypadButton} handelChange={handelChange}>6</KeypadBtn>
                    <KeypadBtn style={styles.keypadButton, styles.darKBtn} handelChange={handelChange}>+</KeypadBtn>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 8 }}>
                    <View style={{ flex: 3, flexDirection: 'column' }}>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <KeypadBtn style={styles.keypadButton} handelChange={handelChange}>1</KeypadBtn>
                            <KeypadBtn style={styles.keypadButton} handelChange={handelChange}>2</KeypadBtn>
                            <KeypadBtn style={styles.keypadButton} handelChange={handelChange}>3</KeypadBtn>

                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <KeypadBtn style={styles.keypadButton, styles.darKBtn} handelChange={handelChange}>%</KeypadBtn>
                            <KeypadBtn style={styles.keypadButton} handelChange={handelChange}>0</KeypadBtn>
                            <KeypadBtn style={styles.keypadButton, styles.darKBtn} handelChange={handelChange}>.</KeypadBtn>
                        </View>

                    </View>
                    <View style={{ flex: 1, height: '100%' }}>
                        <KeypadBtn style={styles.keypadEqualsBtn} evaluateResult={evaluateResult}>=</KeypadBtn>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    calculator: {
        flexDirection: 'column',
        flex: 1,
        color: 'white',
        height: '100%'
    },
    expressionContainer: {
       //  backgroundColor: 'green',
        // height: '24%'
    },
    expression: {
        flex: 1,
        backgroundColor: 'black',
        color: '#fff',
        fontSize: 65,
        fontWeight: '900',
        textAlign: 'right',
        marginTop: 20
    },
    result: {
        flex: 1,
        // height: '100%',
        backgroundColor: 'black',
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'right'
    },
    keypad: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'black',
        height: '80%',
       // flex: 4,
      //  height: '76%',
        flexDirection: 'column'
    },
    keypadButton: {
        // flex: 0.5,
        width: '90%',
        height: '86%',
        textAlign: 'center',
        backgroundColor: '#343a40',
        borderRadius: 180,
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30
    },
    keypadEqualsBtn: {
        backgroundColor: '#e63946',
        width: '90%',
        height: '94%',
        textAlign: 'center',
        borderRadius: 150,
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30
        
    },
    keypadRow: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    darKBtn: {
        backgroundColor: '#e63946',
        width: '90%',
        height: '86%',
        textAlign: 'center',
        // backgroundColor: '#343a40',
        borderRadius: 150,
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30
    },
    keypadEqualsDarKBtn: {
        width: '90%',
        height: '90%',
        textAlign: 'center',
        backgroundColor: '#343a40',
        borderRadius: 150,
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
        backgroundColor: '#e63946'
    },
    input: {
        borderWidth: 0
    }
})
