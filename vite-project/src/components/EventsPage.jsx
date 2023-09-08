// On the Events Page, users can view a list of sports events 
// and click on an event to view its details on the Event Details Page.

import Event from "./Event";

const EventsPage = ({events}) => {

    return (
        <div id="events" className="h-screen w-screens bg-sky-300 pt-28">
            {events.map((event, index) => (
                <div className="bg-white m-4 p-4 rounded-lg shadow-md w-64 h-48 flex flex-col justify-center items-center mt-0" key={index}>
                    <Event event={event}/>
                </div>
            ))}
        </div>
    )
}
export default EventsPage;