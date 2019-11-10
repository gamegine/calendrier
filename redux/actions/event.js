import { AsyncStorage } from 'react-native';

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
            let events = (data !=null)?JSON.parse(data):[]
            events.push(event);
            AsyncStorage.setItem('event', JSON.stringify(events))
                .then(() => { return dispatch({ type: 'INIT', value: events });});
        });
    }
}
