
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';


const SoundVoice = (props) => {

    const [sound, setSound] = React.useState();
    const [isLoaded, setIsLoaded] = React.useState('ready');
    const [result, setResult] = React.useState('Dummy');


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

    async function playSound() {
        sound.replayAsync();
        let base64 = "";
        var reader = new FileReader();
        reader.readAsDataURL(await fetch(props.soundRecording.getURI()).then(r=> r.blob()));
        reader.onloadend = () => {
            base64 = reader.result;
            base64 = base64.replace('data:audio/webm;base64,', '');
            speechToText(base64);
        }
        console.log(props.soundRecording.getURI());
        deleteRecordingFile();
        setIsLoaded('ready');
    }

    function speechToText(base64)
    {
        const endpoint = 'https://speech.googleapis.com/v1p1beta1/speech:recognize';
        const apikey = 'AIzaSyB49iP5yvDXWbok3pgufHvjV6os_6g7a5g';
        let config = {
            languageCode: 'he-IL',
            encoding: 'WEBM_OPUS',
            model: 'default'
        }
        let audio = { content: base64 };
        
        let requestOptions = {
            method: 'POST',
            body: JSON.stringify({config: config, audio: audio})
        }

        fetch(`${endpoint}?key=${apikey}`, requestOptions)
            .then(response => response.json())
            .then(obj => {
                //let result = JSON.parse(json);
                setResult(obj.results[0].alternatives[0].transcript);
            })
            .catch(error => console.error('error', error));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.transcript}>
                {result}
            </Text>
            {
                isLoaded === true?
                    <Button title="Play Sound" onPress={playSound} />
                    : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    transcript: {
        fontSize: 30
    }
})


export default SoundVoice;