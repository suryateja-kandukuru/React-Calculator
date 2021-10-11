import React , { useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button(props) {
    const num= ['1','2','3','4','5','6','7','8','9','0','+', '-', '*', '/', '%', '.']
    useEffect(() => {
         //   console.log(props.handelChange)
    })

    let clicKEvent = (event) => {
        if(num.includes(event)) {
            props.handelChange(event)
        } else if (event === 'C') {
            props.clearResult()
        } else if(event === 'DEL') {
            props.delInput()
        } else if(event === '=') {
            props.evaluateResult()
        }
    }
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={ () => { clicKEvent(props.children)} }>
            <Text {...props}>{ props.children }</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:  1,
        width: '100%'
    }
})