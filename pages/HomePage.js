import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Agenda } from 'react-native-calendars';

export default class HomePage extends React.Component {
  state = {
    items: {}
  };
  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
      />
    );
  }

  loadItems(day) {
    console.log(`Load Items for ${day.year}-${day.month} : ${day.dateString}`);
    setTimeout(() => {
      curent = this.state.items
      for (let i = 1; i <= 31; i++) { curent[`${day.year}-${day.month}-${(i >= 10) ? i : "0" + i}`] = [] }
      curent[`${day.year}-${day.month}-15`] = [{ "height": 50, "name": "test" }, { "height": 50, "name": "test" }]
      if(this.props.items !== curent) this.setState({ items: curent })
    }, 1000);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}><Text>{item.name}</Text></View>
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
    flex: 1,
    paddingTop: 30
  }
});
