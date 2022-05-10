import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';


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
        <View style={styles.container}>
            <Button
                title={recording ? 'Stop Recording' : 'Start Recording'}
                onPress={recording ? stopRecording : startRecording}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default RecordVoice;