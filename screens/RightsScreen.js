import {
    StyleSheet,
    View
} from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';
import Tabs from "../components/Share/Tabs";

const RightsScreen = ({ navigation, route }) => {

    const [activeTab, setActiveTab] = React.useState("Rights");

    React.useEffect(() => {
        setActiveTab(route.params ? route.params.activeTab : "Rights");
    }, [activeTab]);

    return (
        <View>
            <WebView source={{ uri: 'https://www.kolzchut.org.il/he/%D7%90%D7%A0%D7%A9%D7%99%D7%9D_%D7%A2%D7%9D_%D7%9E%D7%95%D7%92%D7%91%D7%9C%D7%95%D7%99%D7%95%D7%AA' }} />
            <Tabs
                navigation={navigation}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
        
    );
};

const styles = StyleSheet.create({
});

export default RightsScreen;
