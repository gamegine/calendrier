import React from 'react';
import { Text, View, Button } from 'react-native';
import { AsyncStorage } from 'react-native';
class SettingsPage extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Paramètres</Text>
                <Button title="clear all events" onPress={()=>AsyncStorage.removeItem('event').then(console.log("async storage event removed"))} />
            </View>
        );
    }
}

export default SettingsPage;
