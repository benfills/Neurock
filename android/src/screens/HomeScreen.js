import React from 'react';
import {View, Text} from react-native;
import { Button } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome to Neurock Home Screen!</Text>
            <Text style={{fontSize: 25, marginTop: 20}}>This is the main screen of the app.</Text>
            <Button title="Get Started" onPress={() => alert('Get Started Pressed!')} /> 
        </View>
    );
};
