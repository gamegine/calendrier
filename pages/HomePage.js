import React from 'react';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          items: {}
        };
      }

    render(){
        /*let test = {
            '2019-11-07':[],
            '2019-11-09':[]
        }
        test[ (new Date()).toISOString().slice(0,10) ]=[{text:"test"}]
        console.log(test)*/
        return(
            //<View style={{ flex: 1 }}>
                //<View style={{flex: 3}}>
                    <Agenda 
                    items={this.state.items}
                    loadItemsForMonth={this.loadItems.bind(this)}
                    
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}

                    />
                    
                    
                    
                //</View>
            //</View>
        );
    }

    loadItems(day) {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
            if (!this.state.items[strTime]) {
              this.state.items[strTime] = [];
              const numItems = Math.floor(Math.random() * 5);
              for (let j = 0; j < numItems; j++) {
                this.state.items[strTime].push({
                  name: 'Item for ' + strTime,
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
          }
          //console.log(this.state.items);
          const newItems = {};
          Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
          this.setState({
            items: newItems
          });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
      }
    
      renderItem(item) {
        return (
          <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
        );
      }
    
      renderEmptyDate() {
        return (
          <View style={styles.item}><Text>Pas d'évènemement enregistré pour cette date.</Text></View>
        );
      }
    
      rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
      }
    
      timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    },
    emptyDate: {
      height: 15,
      flex:1,
      paddingTop: 30
    }
  });
