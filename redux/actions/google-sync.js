import google from '../../serices/google'
import config from '../../config.json'
import redux from '../reducers/event'


export default async (state) => {
    return new Promise((resolve, reject) => {
        new google(config.google.url, config.google.token).events.list({ 'calendarId': 'primary' })
            .then((data) => {
                if (data.items != null) {
                    for (let i = 0; i < data.items.length; i++) {
                        const el = data.items[i]
                        const index = state.findIndex(item => item.id === el.id)
                        if (index == -1)//not exist
                            state = redux(state, { type: 'CREATE', value: el })
                        else {//exist
                            const evUpdate = (new Date(el.updated)).getTime()
                            const stateUpdate = (new Date(state[index].updated)).getTime()
                            if (evUpdate > stateUpdate)
                                state = redux(state, { type: 'UPDATE', value: el })
                            else if (evUpdate < stateUpdate)
                                console.log("most recent >> push", el)
                        }
                    }
                    resolve(state)
                }
                else {
                    resolve({err:"result err data.items null",data:data})
                }
            })
    })
}