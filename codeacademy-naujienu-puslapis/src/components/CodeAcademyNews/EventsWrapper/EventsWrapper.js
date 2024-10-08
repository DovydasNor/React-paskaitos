import AllNewsButton from "../AllNewsButton/AllNewsButton"
import Events from "../EventsElement/Events"
import './EventsWrapper.css'


function EventsWrapper({data}) {

    if(data.length === 0){
        return ''
    }

    const eventsDataList = data.map((item, index) => (
        <Events
            key={index}
            eventHeader={item.eventHeader}
            day={item.day}
            month={item.month}
            address={item.address}
            title={item.title}
        />
    ))

    return(
        <div className="renginai-wrapper">
            {eventsDataList}
            <AllNewsButton 
                text='Daugiau'
                url='/#' 
            />
        </div>
    )
}
export default EventsWrapper