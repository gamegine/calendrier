import React from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-native-datepicker'
import { initAsync, createAsync, updateAsync, deleteAsync } from '../redux/actions/event'

const mapStateToProps = (state) => ({ state })
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) },
    actions: {
      init: bindActionCreators(initAsync, dispatch),
      create: bindActionCreators(createAsync, dispatch),
      update: bindActionCreators(updateAsync, dispatch),
      delete: bindActionCreators(deleteAsync, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(class EventForm extends React.Component {
  state = {
    name: '',
    startdate: (new Date().toISOString()),
    enddate: (new Date().toISOString())
  }
  componentDidMount() {
    const evt = this.props.navigation.getParam("event")
    if (evt != null)
      this.setState({ event: evt, name: evt.summary, startdate: evt.start.dateTime, enddate: evt.end.dateTime })
    else
      this.setState({ event: null })
  }

  componentDidUpdate() {
    const a = (new Date(this.state.startdate)).getTime()
    const b = (new Date(this.state.enddate)).getTime()
    if (a>b) this.setState({enddate:this.state.startdate})
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
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
        />
        <Text style={{ alignSelf: 'center' }}>end</Text>
        <DatePicker
          style={{ width: 300, alignSelf: 'center' }}
          minDate={this.state.startdate}
          date={this.state.enddate}
          mode="datetime"
          format="YYYY-MM-DDTHH:mm:ss.sssZ"
          is24Hour={true}
          onDateChange={(date) => { this.setState({ enddate: date }) }}
          placeholder="select date"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
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
        <View style={{ marginTop: 20 }}>
          {this.state.event != null ? <Button title="update" onPress={() => this.onUpdate()} /> : <Button title="Add" onPress={() => this.onAdd()} />}
        </View>
      </View>
    );
  }


  onAdd() {
    console.log(this.state)
    this.props.actions.create(
      {
        id: '5cieunphln47apph2qao37gjpj' + this.state.name,
        summary: this.state.name,
        start: { dateTime: this.state.startdate },
        end: { dateTime: this.state.enddate },
        //start: { dateTime: '2019-11-14T09:30:00+01:00' },
        //end: { dateTime: '2019-11-14T10:30:00+01:00' },
      }
    )
    this.props.navigation.goBack()
  }
  onUpdate() {
    console.log(this.state)
    this.props.actions.update(
      {
        id: this.state.event.id,
        summary: this.state.name,
        start: { dateTime: this.state.startdate },
        end: { dateTime: this.state.enddate },
      }
    )
    this.props.navigation.goBack()
  }

})

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