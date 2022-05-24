import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as MediaLibrary from "expo-media-library";

import Tabs from "../components/Share/Tabs";
import RecordVoice from "../components/Write/RecordVoice";
import SoundVoice from "../components/Write/SoundVoice";

const WriteScreen = ({ navigation }) => {
  const [soundRecording, setSoundRecording] = React.useState("");

  return (
    <ImageBackground
      source={
        "https://cdn.discordapp.com/attachments/689831002154991617/978730094061289472/unknown.png"
      }
      style={{ flex: 1, width: "auto", height: "100%" }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={[
            styles.tab,
            {
              backgroundColor: "lightblue",
              position: "absolute",
            },
          ]}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Speech to text</Text>
        <RecordVoice setSoundRecording={setSoundRecording} />
        {soundRecording ? <SoundVoice soundRecording={soundRecording} /> : null}

        {/* <Tabs
        navigation={navigation}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      /> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    display: "flex",
    marginBottom: 60,
    marginTop: "5%",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 1,
    padding: 16,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    margin: 4,
  },
});

export default WriteScreen;
