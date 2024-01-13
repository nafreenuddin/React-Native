import React, { useState } from "react";
import { Button, Text, View, Image, StyleSheet } from "react-native";

const hungryCatImage = require('../assets/hungrycat.jpg');
const fullCatImage = require('../assets/fullcat.jpg'); 

const Cat = ({ name,onFeedCat }) => {
    const [isFed, setIsFed] = useState(false);

    const handleFeed = () => {
        setIsFed(true);
        onFeedCat();  
    };
    return (
        <View style={styles.container}>
            <Image 
                source={isFed ? fullCatImage : hungryCatImage}
                style={styles.image} 
            />
            <Text style={styles.catText}>
                {isFed ? `Thank you for the food!` : `I am ${name},  I am hungry`}
            </Text>
            {!isFed && (
                <Button 
                    title="Feed the Cat"    
                    onPress={handleFeed}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    catText: {
        fontSize: 20,
        marginBottom: 10,
    },
});

export default Cat;
