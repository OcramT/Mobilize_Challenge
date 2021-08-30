import { fetchAllEvents } from "../utils/api_utils";
import { useState, useCallback } from "react";
import Preview from "../components/preview";
import Form from "../components/form";
import EventMap from "../components/map";

/* 
  If I had more time I would have broken the events list out into a separate 
  component - it grew more than I anticipated and would be better for clarity 
  to have it broken out.
*/

const HomePage = ({ mapKey }) => {
    const [currentPageEvents, setCurrentPageEvents] = useState(null)
    const [nextPage, setNextPage] = useState()
    const [prevPage, setPrevPage] = useState()
    const [eventPreview, setEventPreview] = useState(null)
    const [userLocation, setUserLocation] = useState(null)
    const [eventMarker, setEventMarker] = useState(null)

    /* 
      This function fires when clicking the 'Next' button and updates state 
      to trigger a rerender of the event list element and keep track of 
      the previous and next pages for pagination 
    */
    const getNext = useCallback( async () => {
        const nextEvents = await fetchAllEvents(nextPage)
        setCurrentPageEvents(nextEvents.data)
        setNextPage(nextEvents.next)
        setPrevPage(nextEvents.previous)
    })
    
    // same as above but for the previous button
    const getPrev = useCallback(async () => {
        const prevEvents = await fetchAllEvents(prevPage)
        setCurrentPageEvents(prevEvents.data)
        setNextPage(prevEvents.next)
        setPrevPage(prevEvents.previous)
    })

    const handleSelect = useCallback((preview) => {
        const { location } = preview.location
        setEventPreview(preview)
        setEventMarker(location)
    })

    /* 
      This function - which is passed as a prop to the Preview component to assist
      in rendering an Event's corresponding information 
    */
    const handleLocation = useCallback(async (location) => {
        setUserLocation(location)
        if (location) {
            const allEvents = await fetchAllEvents(null, location)
            setCurrentPageEvents(allEvents.data)
            setNextPage(allEvents.next)
            setPrevPage(allEvents.previous)
        } else {
            const nearbyEvents = await fetchAllEvents()
            setCurrentPageEvents(nearbyEvents.data)
            setNextPage(nearbyEvents.next)
            setPrevPage(nearbyEvents.previous)
        }
    })

    return (
        <main className='main-page'>
            <header>
                <a href="https://marcotorre.io" target="_blank">Marco Torre</a>
                <h1 className='app-header'>Mobilize Challenge</h1>
                <a href="https://www.linkedin.com/in/marco-torre-388286138/" target="_blank">LinkedIn</a>
            </header>
            <Form handleLocation={handleLocation}/>
            <section className='main-section'>
                <div className='map'>
                    <EventMap
                        eventMarker={eventMarker}
                        isMarkerShown
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapKey}&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
                <div className='events'>
                    {!currentPageEvents 
                    ? <p>Enter Your Zipcode to See Nearby Events!</p> 
                    : (<>
                        <div className='list-wrapper'>
                            <ul className='events-list'>
                                {currentPageEvents.map((event, idx) => {
                                    const {location, title} = event
                                    if (location) {
                                        return (
                                            <li onClick={() => handleSelect(currentPageEvents[idx])} key={`Event-${idx}`}>
                                                <p>Event: {title}</p>
                                                {location.venue 
                                                ? (<p>{location.venue}</p>)
                                                : (<p>No venue provided</p>)}
                                            </li>
                                        )}
                                    })
                                }
                            </ul>
                        </div>
                        <div className='list-nav'>
                            {
                                !prevPage
                                ? <button className='disabled' disabled>Prev</button>
                                : <button onClick={getPrev}>Prev</button>
                            }
                            <button onClick={getNext}>Next</button>
                        </div>
                    </>)}
                </div>
            </section>
            <div className='preview-wrapper'>
                <Preview eventPreview={eventPreview}/>
            </div>
        </main>
    )
}

export async function getStaticProps() {
    const mapKey = process.env.MAP_API_KEY
    return {
        props: {
            mapKey
        }
    }
}

export default HomePage