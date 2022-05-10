import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

import Tabs from '../components/Share/Tabs';
import RecordVoice from '../components/Write/RecordVoice';
import SoundVoice from '../components/Write/SoundVoice';

const WriteScreen = ({ navigation, route }) => {

    const permissionAllert = () => {
        Alert.alert("Permission required", "This app needs to read audio files from your phone", [
            { text: "OK", onPress: () => getPermissions() },
            { text: "Cancel", onPress: () => permissionAllert() }
        ]);

    }

    const getPermissions = async () => {
        const Permissions = await MediaLibrary.getPermissionsAsync(false);
        Permissions.canAskAgain = true;

        if (Permissions.granted) {
            console.log('get audio file');
        }
        if (!Permissions.granted && Permissions.canAskAgain) {
            console.log('Permission to access media library was denied, but can ask again');
            const { status, canAskAgain } = await MediaLibrary.requestPermissionsAsync();

            if (status === 'denied' && canAskAgain) {
                permissionAllert();
            }
            if (status === 'granted') {
                console.log('get audio file');

            }
            if (status === 'denied' && !canAskAgain) {
                console.log('Permission to access media library was permanently denied and can not be asked again');

            }
        }


        // console.log(Permissions);

    }
    React.useEffect(() => {
        getPermissions();
    }, []);



    const [activeTab, setActiveTab] = React.useState(route.params?.activeTab);

    React.useEffect(() => {
        setActiveTab(route.params ? route.params.activeTab : 'Write');
    }, [activeTab]);

    const [soundUri, setSoundUri] = React.useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <RecordVoice setSoundUri={setSoundUri} />
            {soundUri ?
                <SoundVoice soundUri={soundUri} />
                : null
            }

            <Tabs navigation={navigation} activeTab={activeTab} setActiveTab={setActiveTab} />

        </View>
    );
}



const styles = StyleSheet.create({})

export default WriteScreen;
