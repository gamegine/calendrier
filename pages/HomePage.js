import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

class HomePage extends React.Component {

    render(){
        return(
            <View style={{ flex: 1 }}>
                <View style={{flex: 1}}></View>
                <View style={{flex: 3}}>
                    <Calendar/>
                </View>
            </View>
        )
    }
}

export default HomePage;