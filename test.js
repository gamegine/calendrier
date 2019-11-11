import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initAsync, createAsync } from './redux/actions/event'

const mapStateToProps = (state) => ({ state })
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) },
        actions: {
            init: bindActionCreators(initAsync, dispatch),
            create: bindActionCreators(createAsync, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(class WeatherComp extends React.Component {
    componentDidMount() {
        this.props.dispatch({"type":'CREATE',value:{"id":"test","n":"test1"}})
        this.props.dispatch({"type":'CREATE',value:{"id":"test","n":"test2"}})
    }

    render() {
        console.log(this.props.state)
        return (<Text>test</Text>);
    }
})