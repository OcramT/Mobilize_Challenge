import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const EventMap = withScriptjs(withGoogleMap((props) => {
    const { eventMarker } = props
    const newMarker = {}

    //setting up new eventMarker to update event location on map
    if (eventMarker) {
        newMarker['lat'] = parseFloat(eventMarker['latitude'])
        newMarker['lng'] = parseFloat(eventMarker['longitude'])
    }

    return (
        eventMarker 
        ? (<section className='map-container'>
            <div className='map-inset'>
                <GoogleMap
                    defaultZoom={8}
                    defaultCenter={{ lat: 38.89511, lng: -77.03637}}
                    center={newMarker}
                    zoom={15}
                >
                    {
                        props.isMarkerShown 
                        && <Marker 
                            position={
                                (!eventMarker)
                                ? { lat: -34.397, lng: 150.644 } 
                                : newMarker
                                }
                            />
                    }
                </GoogleMap>
            </div>
        </section>) 
        : (<section className='map-container'>
                <div className='map-inset'>
                    <GoogleMap
                        defaultZoom={8}
                        defaultCenter={{ lat: 38.89511, lng: -77.03637 }}
                    >
                        {
                            props.isMarkerShown
                            && <Marker
                                position={
                                    (!eventMarker)
                                        ? { lat: -34.397, lng: 150.644 }
                                        : newMarker
                                }
                            />
                        }
                    </GoogleMap>
                </div>
            </section>)
    )
}))

export default EventMap;