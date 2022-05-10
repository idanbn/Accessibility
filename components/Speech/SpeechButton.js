
import { StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SpeechButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.speakGreeting}
            style={styles.button}
            activeOpacity={0.5}
        >
            <AntDesign name="sound" size={80} color="white" />
            <Text style={styles.buttonText} >Speak</Text>
        </TouchableOpacity>
    );
};

export default SpeechButton;

const styles = StyleSheet.create({

    button: {
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        padding: 14,
        paddingHorizontal: 28,
        borderRadius: 10,
        margin: 24
    },
    buttonText: {
        fontSize: Platform.OS === 'ios' ? 22 : 20,
        color: 'white',
        fontWeight: "bold",
        textTransform: 'uppercase',
        alignSelf: 'center'

    }
})