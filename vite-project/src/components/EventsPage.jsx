// On the Events Page, users can view a list of sports events 
// and click on an event to view its details on the Event Details Page.
import Event from "./Event";

const EventsPage = ({events}) => {

    return (
        <div id="events" className="h-screen w-screen">
            {events.map((event, index) => (
                <div className="">
                    <Event event={event}/>
                </div>
            ))}
        </div>
    )
}
export default EventsPage;