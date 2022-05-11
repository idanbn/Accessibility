import * as React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { Entypo } from "@expo/vector-icons";

const RecordVoice = (props) => {
  const [recording, setRecording] = React.useState();

  const recordingOptions = {
    android: {
      extension: '.m4a',
      outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
      audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
      sampleRate: 44100,
      numberOfChannels: 2,
      bitRate: 128000,
    },
    ios: {
      extension: '.wav',
      audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
      sampleRate: 44100,
      numberOfChannels: 1,
      bitRate: 128000,
      linearPCMBitDepth: 16,
      linearPCMIsBigEndian: false,
      linearPCMIsFloat: false,
    },
  };

  async function startRecording() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(recordingOptions);
      setRecording(recording);
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    const uri = recording.getURI();
    props.setSoundRecording(recording);
    console.log("Recording stopped and stored at", uri);
  }

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.2}
      onPress={recording ? stopRecording : startRecording}
    >
      <Entypo
        name="mic"
        size={70}
        color={recording ? "red" : "green"}
        style={styles.icon}
      />
      <Text style={styles.text}>
        {" "}
        {recording ? "Stop Recording" : "Start Recording"}{" "}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    borderRadius: 10,
    margin: 16,
  },
  text: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    alignSelf: "center",
  },
  icon: {
    alignSelf: "center",
    marginBottom: 10,
  },
});

export default RecordVoice;
