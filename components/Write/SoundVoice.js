
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';


const SoundVoice = (props) => {

    const [sound, setSound] = React.useState();
    const [isLoaded, setIsLoaded] = React.useState('ready');


    async function loadSound() {
        const { sound, status } = await (props.soundRecording).createNewLoadedSoundAsync();

        setSound(sound);
        setIsLoaded(status.isLoaded);
    }

    React.useEffect(() => {
        loadSound();
    }, []);

    const deleteRecordingFile = async () => {
        try {
            const uri = props.soundRecording.getURI();

            const info = await FileSystem.getInfoAsync(uri);
            console.log(info.uri);
            await FileSystem.deleteAsync(info.uri)
        } catch(error) {
            console.log("There was an error deleting recording file", error);
        }
    }

    function playSound() {
        sound.replayAsync();
        deleteRecordingFile();
        setIsLoaded('ready');
    }

    return (
        <View style={styles.container}>
            {
                isLoaded === true?
                    <Button title="Play Sound" onPress={playSound} />
                    : null
            }
        </View>
    );
}

const styles = StyleSheet.create({})


export default SoundVoice;