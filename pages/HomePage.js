import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initAsync, createAsync, updateAsync, deleteAsync } from '../redux/actions/event'

const mapStateToProps = (state) => ({ state })
const mapDispatchToProps = (dispatch) => {
  return { actions: { init: bindActionCreators(initAsync, dispatch) } }
}


export default connect(mapStateToProps, mapDispatchToProps)(class HomePage extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Icon name="ios-refresh" size={25} style={{ marginLeft: 20 }} onPress={() => console.log('sinc data')} />
      ),
      headerRight: (
        <Icon name="ios-add" size={30} style={{ marginRight: 20 }} onPress={() => navigation.push('Add')} />
      )
    }
  };

  state = { items: {} };

  componentDidMount() { this.props.actions.init() }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        renderItem={(el) => (<Test item={el} nav={this.props.navigation} />)}
        renderEmptyDate={() => (<View />)}
        rowHasChanged={(r1, r2) => r1 !== r2}
      />
    );
  }

  loadItems(day) {
    let items = {}
    for (let i = 1; i <= 31; i++) { items[`${day.year}-${day.month}-${(i >= 10) ? i : "0" + i}`] = [] }
    for (let i = 0; i < this.props.state.length; i++) {
      const index = (new Date(this.props.state[i].start.dateTime)).toISOString().slice(0, 10)
      if(items[index])
        items[index].push(this.props.state[i])
      else
        items[index] = [this.props.state[i]]
    }
    this.setState({ items: items })
  }
})




class Test extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => this.props.nav.push('Add', { "event": this.props.item })} style={[styles.item, { height: this.props.item.height }]}>
          <View>
            <Text>{this.props.item.summary}</Text>
            {(this.props.item.description != null) ? <Text>{this.props.item.description}</Text> : null}
          </View>
        </TouchableHighlight >
      </View>
    );
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