import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

class HomePage extends React.Component {

    render(){
        return(
            //<View style={{ flex: 1 }}>
                //<View style={{flex: 3}}>
                    <Agenda 
                    items={{
                        '2019-11-07':[{text: 'projet dev mobile pour le 14/11'}]
                    }}
                    renderItem={(item, firstItemInDay) => {return (<View />);}}
                    renderDay={(day, item) => {return (<View />);}}
                    rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
                    style={{}}

                    />
                    
                    
                    
                //</View>
            //</View>
        )
    }
}

export default HomePage;