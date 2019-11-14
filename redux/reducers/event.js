
const INITIAL_STATE = []
/*    {
        id: 'ev1',
        summary: 'ev 1 ',
        start: { dateTime: '2019-11-14T09:30:00+01:00' },
        end: { dateTime: '2019-11-14T10:30:00+01:00' },
    }
]
//*/
export default function event(state = INITIAL_STATE, action) {
    let nextState;
    switch (action.type) {
        case 'INIT':
            nextState = action.value
            return nextState || state
        case 'CREATE':
            if (state.findIndex(item => item.id === action.value.id) == -1) {
                nextState = [
                    ...state,
                    action.value
                ]
            }
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
                ...state.filter((item) => item.id !== action.value)
            ]
            return nextState || state
        default:
            return state
    }
};