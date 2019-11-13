import { AsyncStorage } from 'react-native';
import reducer from '../reducers/event'

export const initAsync = () => {
    return dispatch => {
        AsyncStorage.getItem('event').then(data => {
            return dispatch({ type: 'INIT', value: JSON.parse(data) });
        });
    };
}

export const createAsync = (event) => {
    return dispatch => {
        AsyncStorage.getItem('event').then(data => {
            const events = reducer((data != null) ? JSON.parse(data) : [], { type: 'CREATE', value: event })
            AsyncStorage.setItem('event', JSON.stringify(events))
                .then(() => { return dispatch({ type: 'INIT', value: events }); });
        });
    }
}

export const updateAsync = (event) => {
    return dispatch => {
        AsyncStorage.getItem('event').then(data => {
            const events = reducer((data != null) ? JSON.parse(data) : [], { type: 'UPDATE', value: event })
            AsyncStorage.setItem('event', JSON.stringify(events))
                .then(() => { return dispatch({ type: 'INIT', value: events }); });
        });
    }
}

export const deleteAsync = (eventId) => {
    return dispatch => {
        AsyncStorage.getItem('event').then(data => {
            const events = reducer((data != null) ? JSON.parse(data) : [], { type: 'DELETE', value: eventId })
            AsyncStorage.setItem('event', JSON.stringify(events))
                .then(() => { return dispatch({ type: 'INIT', value: events }); });
        });
    }
}