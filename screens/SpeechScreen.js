import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  TouchableWithoutFeedback,
  Linking,
  ImageBackground,
} from "react-native";
import * as Speech from "expo-speech";
import React from "react";

import SpeechButton from "../components/Speech/SpeechButton";
import Tabs from "../components/Share/Tabs";

const SpeechScreen = () => {
  const [name, setName] = React.useState("");

  const speakGreeting = () => {
    const greeting = ` ${name}`;
    const options = {
      voice: "com.apple.ttsbundle.Carmit-compact",
      pitch: 1.5,
      rate: 0.7,
    };
    Speech.speak(greeting, options);
  };

  // const [activeTab, setActiveTab] = React.useState("Speech");

  // React.useEffect(() => {
  //   setActiveTab(route.params ? route.params.activeTab : "Speech");
  // }, [activeTab]);

  return (
    <ImageBackground
      source={
        "https://cdn.discordapp.com/attachments/689831002154991617/978730094061289472/unknown.png"
      }
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1, borderBottom: "1px solid" }}>
        <View style={styles.container}>
          <View
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              height: "40%",
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            <Image
              source={
                "https://cdn.discordapp.com/attachments/969978366121869312/978701641870114826/unknown.png"
              }
              style={{
                width: "10%",
                height: "95%",
              }}
            />
            <Text style={styles.text}>Text to speech</Text>
          </View>
          <TextInput style={styles.input} onChangeText={setName} value={name} />
          <SpeechButton speakGreeting={speakGreeting} />
          <TouchableOpacity
            onPress={() => Linking.openURL("mailto:support@example.com")}
            style={[
              styles.tab,
              {
                backgroundColor: "lightblue",
                position: "absolute",
                marginLeft: "95%",
                marginTop: "20%",
              },
            ]}
          >
            <Text>FeedBack</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.kolzchut.org.il/he/%D7%90%D7%A0%D7%A9%D7%99%D7%9D_%D7%A2%D7%9D_%D7%9E%D7%95%D7%92%D7%91%D7%9C%D7%95%D7%99%D7%95%D7%AA"
              )
            }
            style={[
              styles.tab,
              {
                backgroundColor: "lightblue",
                position: "absolute",
                marginRight: "92%",
                marginTop: "20%",
              },
            ]}
          >
            <Text>Know your rights</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    alignSelf: "stretch",
    borderBottomWidth: 2,
    borderBottomColor: "darkblue",
    marginHorizontal: 30,
    margin: 8,
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  text: {
    fontSize: 40,
    display: "flex",
    marginRight: "10%",
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

export default SpeechScreen;
