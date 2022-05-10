
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';


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

    function playSound() {
        sound.replayAsync();
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