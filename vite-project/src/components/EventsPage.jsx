// On the Events Page, users can view a list of sports events
// and click on an event to view its details on the Event Details Page.
// for my sports event tracker app: how should i go about making my sports event section: the data will be persisted via db.json and i wanted to have like a huge container in the eventspage which will hold the events, but will be categorized by sport. So at the top you will click football for example and it will display all the football events on the dbjson. Or if baseball is selected same thing

import Event from "./Event";
import { useState, useEffect } from "react";

const EventsPage = ({events, handleDelete}) => {
  const [filteredEvent, setFilteredEvent] = useState("");

  const handleSelectedEvent = () => {
    
    

  }

  

  return (
    <div id="events" className="h-screen w-screens bg-sky-300 pt-20">
      <h1 className="text-4xl font-bold mb-4 text-white text-center">
        Events Happening:{" "}
      </h1>
      <div className="overflow-y-auto max-h-[600px] mx-4 p-4 rounded-lg shadow-md bg-white">
        {events.map((event, index) => (
          <div
            className="bg-white m-4 p-4 rounded-lg shadow-md w-7/8 h-14 flex flex-col justify-center items-center mt-0"
            key={index} 
          >
            <Event event={event} handleDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default EventsPage;
