import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { Entypo } from '@expo/vector-icons';

const RecordVoice = (props) => {

    const [recording, setRecording] = React.useState();

    async function startRecording() {
        try {
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            const { recording } = await Audio.Recording.createAsync(
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );
            setRecording(recording);

        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {

        setRecording(undefined);
        await recording.stopAndUnloadAsync();

        const uri = recording.getURI();
        props.setSoundRecording(recording);
        console.log('Recording stopped and stored at', uri);
    }

    return (

        <TouchableOpacity style={styles.button} activeOpacity={0.2} onPress={recording ? stopRecording : startRecording}>
            <Entypo name="mic" size={70} color={recording ? 'red' : 'green'}  style={styles.icon}/>
            <Text style={styles.text}> {recording ? 'Stop Recording' : 'Start Recording'} </Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        borderRadius: 10,
        margin: 16
    },
    text: {
        fontSize: Platform.OS === 'ios' ? 22 : 20,
        color: 'white',
        fontWeight: "bold",
        textTransform: 'uppercase',
        alignSelf: 'center'
    },
    icon: {
        alignSelf: 'center',
        marginBottom: 10
    }

})

export default RecordVoice;