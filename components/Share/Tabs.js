import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Tabs = ({ navigation, ...props }) => {

    return (
        <View style={styles.container}>
            <View style={styles.tabs}>
                <TouchableOpacity
                    onPress={() => { props.setActiveTab('Speech'); navigation.navigate('Speech', { activeTab: 'Speech' }); }}
                    style={[styles.tab, { backgroundColor: props.activeTab === 'Speech' ? 'black' : 'lightblue' }]}
                >
                    <Text style={[styles.text, { color: props.activeTab === 'Speech' ? 'white' : 'black' }]}> Speech </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { props.setActiveTab('Write'); navigation.navigate('Write', { activeTab: 'Write' }); }}
                    style={[styles.tab, { backgroundColor: props.activeTab === 'Write' ? 'black' : 'lightblue' }]}
                >
                    <Text style={[styles.text, { color: props.activeTab === 'Write' ? 'white' : 'black' }]}> Write </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 80,
        position: 'absolute',
        left: 0, right: 0, bottom: 0
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '60%',
        height: 60,
        borderRadius: 30,
        backgroundColor: 'darkblue',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 1,
        padding: 16,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
        margin: 4,

    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})

export default Tabs;
