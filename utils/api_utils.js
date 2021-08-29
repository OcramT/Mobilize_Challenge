import 'isomorphic-fetch'

export const fetchAllEvents = async (next=null, zip=null) => {
    let result
    let url    
    const options = {
        method: 'GET',
        headers: {
            "Accept": "application/json"
        }
    }

    if (!zip) {
        url = `https://api.mobilize.us/v1/events`

        if (!next) { url } else { url = next }
        await fetch(url, options)
            .then(res => res.json())
            .then(data => result = data)
            .catch(err => console.log(err))

    } else {
        url = `https://api.mobilize.us/v1/events?zipcode=${zip}`

        if (!next) { url } else { url = next }
        await fetch(url, options)
            .then(res => res.json())
            .then(data => result = data)
            .catch(err => console.log(err))
    }

    return result
}
