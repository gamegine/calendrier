import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initAsync, createAsync, updateAsync, deleteAsync } from './redux/actions/event'
import testAsync from './redux/actions/google-sync'

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
    state = {
    }

    componentDidMount() {
        testAsync([]).then(console.log)
    }

    render() {
        return (<Text>test</Text>);
    }
})