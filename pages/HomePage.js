import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Agenda } from 'react-native-calendars';

export default class HomePage extends React.Component {
  state = {
    items: {}
  };

  componentDidMount() {
    const ev = [
      {
        kind: 'calendar#event',
        etag: '"3147290908948000"',
        id: '5cieunphln47apph2qao37gjpj',
        status: 'confirmed',
        htmlLink:
          'https://www.google.com/calendar/event?eid=NWNpZXVucGhsbjQ3YXBwaDJxYW8zN2dqcGogbXJ0ZWNoNDIxMkBt',
        created: '2019-11-13T11:44:14.000Z',
        updated: '2019-11-13T11:44:14.474Z',
        summary: 'test',
        creator: { email: 'mrtech4212@gmail.com', self: true },
        organizer: { email: 'mrtech4212@gmail.com', self: true },
        start: { dateTime: '2019-11-14T09:30:00+01:00' },
        end: { dateTime: '2019-11-14T10:30:00+01:00' },
        iCalUID: '5cieunphln47apph2qao37gjpj@google.com',
        sequence: 0,
        reminders: { useDefault: true }
      }
    ]

    let items = {}
    for (let i = 1; i <= 31; i++) { items[`2019-11-${(i >= 10) ? i : "0" + i}`] = [] }

    for (let i = 0; i < ev.length; i++){
      const d = (new Date(ev[i].start.dateTime)).toISOString().slice(0,10)
      items[ d ].push({name:ev[i].summary})
    }
    this.setState({items:items})
  }


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
    /*
    console.log(`Load Items for ${day.year}-${day.month} : ${day.dateString}`);
    setTimeout(() => {
      curent = this.state.items
      for (let i = 1; i <= 31; i++) { curent[`${day.year}-${day.month}-${(i >= 10) ? i : "0" + i}`] = [] }
      curent[`${day.year}-${day.month}-15`] = [{ "height": 50, "name": "test" }, { "height": 50, "name": "test" }]
      if(this.props.items !== curent) this.setState({ items: curent })
    }, 1000);
    */
  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}><Text>{item.name}</Text></View>
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
