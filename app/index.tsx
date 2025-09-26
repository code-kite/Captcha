import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {

    const [captcha, setCaptcha] = useState("")
    const [userInput, setuserInput] = useState("")
    const [result, setResult] = useState("")

    const generate = () => {
        const allowedString = "Ddskb24234asuhcbuhbu4buhb53h4j5dsdsdsdd4jhv5g345v4b3jk2l4bk2jh34b"
        const random = Math.floor(Math.random() * 50)
        setCaptcha(allowedString.substring(random, random + 6))
    }

    const match = () => {
        if(captcha === "") {
            setResult("Please press generate for capthcha genration")
            return
        }

        if(userInput === "") {
            setResult("please enter your input for matching captcha")
            return
        }
        if (captcha.toLowerCase() === userInput.toLowerCase()) {
            setResult("Captcha Matched")
        } else {
            setResult("Captcha Not Matched")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>{result}</Text>

            <Text style={styles.text}>{captcha}</Text>

            <TextInput placeholder= "Your captcha input" style={styles.input} onChangeText={setuserInput} value={userInput}>

            </TextInput>
            < Button title='Generate' onPress={() => generate()}></Button>
            < Button title='Match' onPress={() => match()}></Button>
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({

    container: {
        margin: 20,
        gap: 15
    },
    input: {
        borderWidth: 3,
        borderColor: "blue",
        backgroundColor: "yellow",
        height: 50
    },
    text: {
        borderWidth: 1,
        fontWeight: "bold",
        borderColor: "black",
        padding: 20
    },
})