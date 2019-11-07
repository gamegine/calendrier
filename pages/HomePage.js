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
                        '2019-11-08':[{text: 'projet dev mobile pour le 14/11'},{text: 'blblblblbl'}],
                        
                    }}
                    renderItem={(item, firstItemInDay) => {return (<View><Text>{item.text}</Text></View>);}}
                    renderDay={(day, item) => {return (<View />);}}
                    rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
                    style={{}}
                    theme={{
                        arrowColor: 'white',
                        'stylesheet.calendar.header': {
                          week: {
                            marginTop: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                          }
                        }
                      }}
                    onRefresh={() => console.log('refreshing...')}
                    refreshing={false}
                    refreshControl={null}
                    renderKnob={() => {return (<View />);}}
                    renderEmptyData = {() => {return (<View />);}}
                    loadItemsForMonth={(month) => {console.log('trigger items loading')}}
  onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
  onDayPress={(day)=>{console.log('day pressed')}}
  onDayChange={(day)=>{console.log('day changed')}}

                    />
                    
                    
                    
                //</View>
            //</View>
        )
    }
}

export default HomePage;