import React from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

import DatePicker from 'react-native-datepicker'


export default class EventForm extends React.Component {
  state = {
    name: '',
    startdate: (new Date().toISOString()),
    enddate: (new Date().toISOString())
  }
  render() {
    console.log(this.state)
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          placeholder="Name"
          autoFocus={true}
          autoCorrect={true}
          keyboardType="default"
        />
        <View>
          <View>
            <Text>start</Text>
            <DatePicker
              style={{ width: 200 }}
              date={this.state.startdate}
              mode="datetime"
              format="YYYY-MM-DDTHH:mm:ss.sssZ"
              is24Hour={true}
              onDateChange={(date) => { this.setState({ startdate: date }) }}
              placeholder="select date"
            />
          </View>
          <View>
            <Text>end</Text>
            <DatePicker
              style={{ width: 200 }}
              date={this.state.enddate}
              mode="datetime"
              format="YYYY-MM-DDTHH:mm:ss.sssZ"
              is24Hour={true}
              onDateChange={(date) => { this.setState({ enddate: date }) }}
              placeholder="select date"
            />
          </View>
        </View>
        {this.props.id != null ? <Button title="update" onPress={() => this.onUpdate()} /> : <Button title="Add" onPress={() => this.onAdd()} />}
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