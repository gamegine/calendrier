import React from 'react';
import { Text, StatusBar, TextInput, View, StyleSheet, DatePickerIOS } from 'react-native';
export default class EventForm extends React.Component {
  state = { name: '' }
  render() {
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
      </View>
    );
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