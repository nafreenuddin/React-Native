import React, { useState } from "react";
import { Button, Text, View, Image, StyleSheet, TextInput } from "react-native";
import Cat from "./cat";


const GuessCatName = ({ onBack, defaultName, onCorrectGuess }) => {
    const [text, setText] = useState("");
    const [resultMessage, setResultMessage] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [submitCount, setSubmitCount] = useState(0);
    const [catFed, setCatFed] = useState(false);
    const maxAttempts = 3;

    const handleGuess = () => {
        if (submitCount < maxAttempts) {
            setSubmitCount(submitCount + 1);
            if (text.toLowerCase() === defaultName.toLowerCase()) {
                setIsCorrect(true);
                onCorrectGuess();
            } else if (submitCount < maxAttempts - 1) {
                setResultMessage("Wrong answer. Try again!");
            } else {
                setResultMessage(`You're wrong! My name is ${defaultName}.`);
            }
        }
    };
    const handleFeedCat = () => {
        setCatFed(true);  // Update the state when the cat is fed
    };
    if (isCorrect) {
        return (
            <View>
                {!catFed && <Text>Yes, You're Correct!</Text>}
                <Cat name={text} attempts={submitCount} onFeedCat={handleFeedCat} />
            </View>
        );
    }
    return (
        <View>
            <TextInput
                placeholder="Enter the Name!"
                onChangeText={setText}
                value={text}
                style={styles.textInput}
            />
            <Button title="Submit" onPress={handleGuess} />

            <Text>{resultMessage}</Text>
            <Text>Attempts: {submitCount}</Text>
            <Text>Remaining Attempts: {maxAttempts - submitCount}</Text>

            <Button title="Back" onPress={onBack} />
        </View>
    );



};



const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    catText: {
        fontSize: 20,
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1, // Border thickness
        borderColor: "gray", // Border color
        borderRadius: 5, // Optional, for rounded corners
        padding: 10, // Optional, for internal spacing
        marginBottom: 10, // Optional, for spacing below the TextInput
    },
});

export default GuessCatName;

