import 'isomorphic-fetch'

//kept this in a separate file to not clutter up Index.jsx

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
        // if a zipcode is not entered then fetch all events
        url = `https://api.mobilize.us/v1/events`

        if (!next) { url } else { url = next }
        await fetch(url, options)
            .then(res => res.json())
            .then(data => result = data)
            .catch(err => console.log(err))

    } else {
        // if a zipcode is entered then use Mobilize's zipcode filter
        url = `https://api.mobilize.us/v1/events?zipcode=${zip}`

        if (!next) { url } else { url = next }
        await fetch(url, options)
            .then(res => res.json())
            .then(data => result = data)
            .catch(err => console.log(err))
    }

    return result
}
