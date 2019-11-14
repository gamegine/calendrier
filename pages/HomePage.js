import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HomePage extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Icon name="ios-add" size={25} style={{ marginRight: 20 }} onPress={() => navigation.push('Add')} />
      )
    }
  };

  state = { items: {} };

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        renderItem={this.renderItem}
        renderEmptyDate={() => (<View />)}
        rowHasChanged={this.rowHasChanged}
      />
    );
  }

  loadItems(day) {
    let items = {}
    for (let i = 1; i <= 31; i++) { items[`2019-11-${(i >= 10) ? i : "0" + i}`] = [] }
    for (let i = 0; i < ev.length; i++)
      items[(new Date(ev[i].start.dateTime)).toISOString().slice(0, 10)].push(ev[i])
    this.setState({ items: items })
  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}>
        <Text>{item.summary}</Text>
        {(item.description != null) ? <Text>{item.description}</Text> : null}
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
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
  }
});


const ev = [
  {
    kind: 'calendar#event',
    etag: '"3147293618520000"',
    id: '5cieunphln47apph2qao37gjpj',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NWNpZXVucGhsbjQ3YXBwaDJxYW8zN2dqcGogbXJ0ZWNoNDIxMkBt',
    created: '2019-11-13T11:44:14.000Z',
    updated: '2019-11-13T12:06:49.260Z',
    summary: 'test',
    description: 'desc test',
    creator: { email: 'mrtech4212@gmail.com', self: true },
    organizer: { email: 'mrtech4212@gmail.com', self: true },
    start: { dateTime: '2019-11-14T09:30:00+01:00' },
    end: { dateTime: '2019-11-14T10:30:00+01:00' },
    iCalUID: '5cieunphln47apph2qao37gjpj@google.com',
    sequence: 0,
    reminders: { useDefault: true }
  },
  {
    id: '5cieunphln47apph2qao37gjpj',
    summary: 'test min',
    start: { dateTime: '2019-11-14T09:30:00+01:00' },
    end: { dateTime: '2019-11-14T10:30:00+01:00' },
  }
]