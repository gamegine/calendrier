
const INITIAL_STATE = [
    {
        kind: 'calendar#event',
        etag: '"3146333931280000"',
        id: 'm74t7kkhmcus68oomrgcbhjr24',
        status: 'confirmed',
        htmlLink:
            'https://www.google.com/calendar/event?eid=bTc0dDdra2htY3VzNjhvb21yZ2NiaGpyMjQgZWdibXp6aWl4eEBt',
        created: '2019-11-07T22:49:25.000Z',
        updated: '2019-11-07T22:49:25.640Z',
        summary: 'fake event',
        location: 'Somewhere',
        creator: { email: 'egbmzziixx@gmail.com', self: true },
        organizer: { email: 'egbmzziixx@gmail.com', self: true },
        start: { dateTime: '2019-11-09T18:00:00+01:00' },
        end: { dateTime: '2019-11-09T18:25:00+01:00' },
        iCalUID: 'm74t7kkhmcus68oomrgcbhjr24@google.com',
        sequence: 0,
        reminders: { useDefault: true }
    }
]

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