import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({state})
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(class WeatherComp extends React.Component {
    componentDidMount() {
        this.props.dispatch({ type: 'INIT', value: [] })
    }

    render() {
        console.log("\n\n=========",this.props)
        return (<Text>test</Text>);
    }
})