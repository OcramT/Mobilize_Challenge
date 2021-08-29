const Preview = (props) => {
    const default_img = "https://mobilizeamerica.imgix.net/uploads/organization/logo-for-mobilize-feed%403x_20200930173319016754.png?auto=format"
    
    if (props.eventPreview) {
        const {
            featured_image_url,
            location,
            title,
            description
        } = props.eventPreview
        const {
            address_lines,
            postal_code,
            venue,
            region,
        } = location
    

        return ( !props.eventPreview 
            ? <div className='empty-state'>Choose an Event to See More Information!</div> 
            : ( <section className='preview-section'>
                {featured_image_url 
                ? ( <div className='image-wrapper'>
                        <img className='prev-img' src={featured_image_url} alt="Event Image" />
                    </div>)
                : (<div className='image-wrapper'>
                        <img className='prev-img' src={default_img} alt="Event Image" />
                    </div>)}
                <div className='info'>
                    <div>
                        <h1>EVENT INFO</h1>
                        <h2 className='event-title'>{title}</h2>
                        <p>{description}</p>
                    </div>
                    
                    <div>
                        <h1>EVENT LOCATION</h1>
                        <h2>REGION: {region}</h2>
                        {venue 
                        ? (<div>VENUE: {venue}</div>)
                        : (<div>VENUE: None Listed</div>)}
                        <ul>
                            <h3>ADDRESS:</h3>
                            { address_lines 
                            ? (address_lines.map((line, idx) => (
                                <li key={`address-${idx}`}>
                                    <div>{line}</div>
                                </li>))) 
                            : <></>
                            }
                        </ul>
                        <div>{postal_code}</div>
                    </div>
                </div>
            </section>
        ))} else {
            return  <div className='empty-state'>
                        Choose an Event to See More Information!
                    </div>
        }
}

export default Preview