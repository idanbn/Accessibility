import { React } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from "react-native";
import SpeechScreen from "./SpeechScreen";
import WriteScreen from "./WriteScreen";

const HomePage = ({ navigation, route }) => {
  return (
    <View style={{ height: "100%" }}>
      <SpeechScreen />
      <WriteScreen navigation={navigation} />
    </View>
  );
};

export default HomePage;
