import React from 'react';
import { View, StyleSheet } from 'react-native';

import Tabs from '../components/Share/Tabs';

const WriteScreen = ({ navigation, route }) => {


    const [activeTab, setActiveTab] = React.useState(route.params?.activeTab);

    React.useEffect(() => {
        setActiveTab(route.params ? route.params.activeTab : 'Write');
    }, [activeTab]);

    return (
        <View style={{ flex: 1 }}>
            <Tabs navigation={navigation} activeTab={activeTab} setActiveTab={setActiveTab} />

        </View>
    );
}

const styles = StyleSheet.create({})

export default WriteScreen;
