   
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { React } from 'react';

import SpeechScreen from '../screens/SpeechScreen';
import WriteScreen from '../screens/WriteScreen';



export default function AppNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                mode='model'
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={"Speech"}
            >
                <Stack.Screen name="Speech" component={SpeechScreen} />
                <Stack.Screen name="Write" component={WriteScreen} />



            </Stack.Navigator>
        </NavigationContainer>
    );
}