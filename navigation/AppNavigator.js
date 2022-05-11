   
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { React } from 'react';

import SpeechScreen from '../screens/SpeechScreen';
import WriteScreen from '../screens/WriteScreen';
import LoginScreen from '../screens/LoginScreen';
// import RightsScreen from '../screens/RightsScreen';

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
                <Stack.Screen name="Login" component={LoginScreen}/>
                {/* <Stack.Screen name="Rights" component={RightsScreen}/> */}


            </Stack.Navigator>
        </NavigationContainer>
    );
}