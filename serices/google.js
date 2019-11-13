export default class calendar {
    constructor(rooturl = "https://www.googleapis.com", token = null) {
        this.url = rooturl
        this.token = token
    }

    events = {
        "insert": async (parameters) => {
            return new Promise((resolve, reject) => {
                fetch(this.url + `/calendar/v3/calendars/${parameters.calendarId}/events`,
                    {
                        method: 'POST',
                        body: JSON.stringify(parameters.resource),
                        headers: {
                            'Authorization': `${this.token.token_type} ${this.token.access_token}`,
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((response) => response.json().then(data => resolve(data)))
                    .catch((error) => reject(error))
            })

        },
        "list": async (parameters) => {
            return new Promise((resolve, reject) => {
                fetch(this.url + `/calendar/v3/calendars/${parameters.calendarId}/events`,
                    {
                        headers: {
                            'Authorization': `${this.token.token_type} ${this.token.access_token}`,
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((response) => response.json().then(data => resolve(data)))
                    .catch((error) => reject(error))
            })
        },
        "update": async (parameters) => {
            return new Promise((resolve, reject) => {
                fetch(this.url + `/calendar/v3/calendars/${parameters.calendarId}/events/${parameters.eventId}`,
                    {
                        method: 'PUT',
                        body: JSON.stringify(parameters.resource),
                        headers: {
                            'Authorization': `${this.token.token_type} ${this.token.access_token}`,
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((response) => response.json().then(data => resolve(data)))
                    .catch((error) => reject(error))
            })
        },
        "delete": async (parameters) => {
            return new Promise((resolve, reject) => {
                fetch(this.url + `/calendar/v3/calendars/${parameters.calendarId}/events/${parameters.eventId}`,
                    {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `${this.token.token_type} ${this.token.access_token}`,
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((response) => resolve(response))
                    .catch((error) => reject(error))
            })
        },
    }
}