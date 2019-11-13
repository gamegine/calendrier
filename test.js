import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initAsync, createAsync, updateAsync, deleteAsync } from './redux/actions/event'

import { AsyncStorage } from 'react-native';

import calendar from './serices/google'

import { google } from './config.json'

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
export default connect(mapStateToProps, mapDispatchToProps)(class WeatherComp extends React.Component {
    componentDidMount() {
        //AsyncStorage.removeItem("event").then(console.log("storage remove event"))
        //this.props.actions.init()
        //this.props.actions.create({ "id": 1, "test": "test" })
        //this.props.actions.update({ "id": 1, "test": "test1" })
        //this.props.actions.delete(1)
        //this.props.dispatch({ type: 'INIT', value: [] })

        const resource = {
            "summary": "test",
            "location": "Somewhere",
            "start": {
                "dateTime": "2019-11-15T10:00:00.000-07:00"
            },
            "end": {
                "dateTime": "2019-11-15T11:30:00.000-07:00"
            }
        };
        const cal = new calendar(google.url, google.token);
        //cal.events.list({'calendarId': 'primary'}).then(console.log)
        //cal.events.insert({'calendarId': 'primary','resource': resource}).then(console.log)
        //cal.events.update({'calendarId': 'primary','eventId':'08dmuabk2321c63cug3an6f536','resource': resource}).then(console.log)
        //cal.events.delete({'calendarId': 'primary','eventId':'1aoimsfqijbcd8qguobnu3a50t'}).then(console.log)
    }

    render() {
        return (<Text>test</Text>);
    }
})