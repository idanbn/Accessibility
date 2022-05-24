import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

const Tabs = ({ navigation, ...props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => {
            props.setActiveTab("Speech");
            navigation.navigate("Speech", { activeTab: "Speech" });
          }}
          style={[
            styles.tab,
            {
              backgroundColor:
                props.activeTab === "Speech" ? "black" : "lightblue",
            },
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: props.activeTab === "Speech" ? "white" : "black" },
            ]}
          >
            {" "}
            Speech{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.setActiveTab("Write");
            navigation.navigate("Write", { activeTab: "Write" });
          }}
          style={[
            styles.tab,
            {
              backgroundColor:
                props.activeTab === "Write" ? "black" : "lightblue",
            },
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: props.activeTab === "Write" ? "white" : "black" },
            ]}
          >
            {" "}
            Write{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.setActiveTab("Login");
            navigation.navigate("Login", { activeTab: "Login" });
          }}
          style={[
            styles.tab,
            {
              backgroundColor:
                props.activeTab === "Login" ? "black" : "lightblue",
            },
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: props.activeTab === "Login" ? "white" : "black" },
            ]}
          >
            {" "}
            Login{" "}
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => {
            props.setActiveTab("Rights");
            navigation.navigate("Rights", { activeTab: "Rights" });
          }}
          style={[
            styles.tab,
            {
              backgroundColor:
                props.activeTab === "Rights" ? "black" : "lightblue",
            },
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: props.activeTab === "Rights" ? "white" : "black" },
            ]}
          >
            {" "}
            Your Rights{" "}
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:support@example.com")}
          style={[
            styles.tab,
            {
              backgroundColor: "lightblue",
              position: "absolute",
              top: 80,
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
              top: 80,
              left: 200,
            },
          ]}
        >
          <Text>Know your rights</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 80,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
    height: 70,
    borderRadius: 30,
    backgroundColor: "darkblue",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
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
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Tabs;
