
const INITIAL_STATE = []

export default function event(state = INITIAL_STATE, action) {
    let nextState;
    switch (action.type) {
        case 'INIT':
            nextState = action.value
            return nextState || state
        case 'CREATE':
            nextState = [
                ...state,
                action.value
            ]
            return nextState || state
        case 'UPDATE':
            let index = state.findIndex(item => item.id === action.value.id)
            if (index !== -1) {
                nextState = [...state]
                nextState[index] = action.value
            }
            return nextState || state
        case 'DELETE':
            nextState = [
                ...state.filter( (item) => item.id !== action.value)
            ]
            return nextState || state
        default:
            return state
    }
};