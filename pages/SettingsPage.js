import React from 'react';
import { Text, View } from 'react-native';

class SettingsPage extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Paramètres</Text>
            </View>
        );
    }
}

export default SettingsPage;
