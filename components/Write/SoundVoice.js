
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';


const SoundVoice = (props) => {

    const [sound, setSound] = React.useState();

    async function playSound() {
        console.log('Loading Sound');
        console.log(props.soundUri);

        const sound = new Audio.Sound();
        const URI = props.soundUri;
        try {
          await sound.loadAsync(props.soundUri);
          await sound.playAsync();
          // Your sound is playing!
        
          // Don't forget to unload the sound from memory
          // when you are done using the Sound object
          await sound.unloadAsync();
        } catch (error) {
          // An error occurred!
        }
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            <Button title="Play Sound" onPress={playSound} />
        </View>
    );
}

const styles = StyleSheet.create({})


export default SoundVoice;