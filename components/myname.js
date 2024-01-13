import React, { useState } from "react";
import { Button, Text, View, Image, StyleSheet, TextInput } from "react-native";
import GuessCatName from "./guessName";

const GuessCat = require("../assets/guessmyname.png");

const MyName = () => {
    const [view, setView] = useState("initial");
    const [correctGuessMade, setCorrectGuessMade] = useState(false);
    const defaultName = "Puppy";

    const handleCorrectGuess = () => {
        setCorrectGuessMade(true);
    };

    return (
        <View>
            {!correctGuessMade && <Image source={GuessCat} style={styles.image} />}
            {view === "initial" ? (
                <>
                    <Text style={styles.catText}>Guess My Name!</Text>
                    <Button title="Play" onPress={() => setView("game")} />
                </>
            ) : (
                <GuessCatName
                    onBack={() => {
                        setView("initial");
                        setCorrectGuessMade(false);
                    }}
                    defaultName={defaultName}
                    onCorrectGuess={handleCorrectGuess}
                />
            )}
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

export default MyName;