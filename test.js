import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initAsync, createAsync, updateAsync, deleteAsync } from './redux/actions/event'

import { AsyncStorage } from 'react-native';

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
        this.props.actions.init()
        this.props.actions.create({ "id": 1, "test": "test" })
        this.props.actions.update({ "id": 1, "test": "test1" })
        this.props.actions.delete(1)
    }

    render() {
        console.log(this.props.state)
        return (<Text>{JSON.stringify(this.props.state)}</Text>);
    }
})