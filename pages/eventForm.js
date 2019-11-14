import React from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

import DatePicker from 'react-native-datepicker'


export default class EventForm extends React.Component {
  state = {
    name: '',
    startdate: (new Date().toISOString()),
    enddate: (new Date().toISOString())
  }
  componentDidMount() {
    this.setState({ event: this.props.navigation.getParam("event") })
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={name => this.setState({ name: name })}
          placeholder="Name"
          autoCorrect={true}
          keyboardType="default"
        />
        <Text style={{ alignSelf: 'center' }} >start</Text>
        <DatePicker
          style={{ width: 300, alignSelf: 'center' }}
          date={this.state.startdate}
          mode="datetime"
          format="YYYY-MM-DDTHH:mm:ss.sssZ"
          is24Hour={true}
          onDateChange={(date) => { this.setState({ startdate: date }) }}
          placeholder="select date"
        />
        <Text style={{ alignSelf: 'center' }}>end</Text>
        <DatePicker
          style={{ width: 300, alignSelf: 'center' }}
          date={this.state.enddate}
          mode="datetime"
          format="YYYY-MM-DDTHH:mm:ss.sssZ"
          is24Hour={true}
          onDateChange={(date) => { this.setState({ enddate: date }) }}
          placeholder="select date"
        />
        <TextInput
          style={styles.input}
          value={this.state.desc}
          onChangeText={name => this.setState({ desc: name })}
          placeholder="description"
          autoCorrect={true}
          keyboardType="default"
          multiline={true}
          numberOfLines={5}
        />
        <View style={{marginTop:20}}>
          {this.state.event != null ? <Button title="update" onPress={() => this.onUpdate()} /> : <Button title="Add" onPress={() => this.onAdd()} />}
        </View>
      </View>
    );
  }


  onAdd() {
    this.props.navigation.goBack()
  }
  onUpdate() {
    this.props.navigation.goBack()
  }

};

const styles = StyleSheet.create({
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  }
});