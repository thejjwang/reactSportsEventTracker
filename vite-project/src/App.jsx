import { useState,useEffect } from "react";
import NavBar from "./components/NavBar";
import EventsPage from "./components/EventsPage";
import HomePage from "./components/HomePage";
import About from "./components/About";
import AddEventModal from "./components/AddEventModal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/events");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setEvents(data);
          console.log(events);
        } else {
          console.log("Failed to fetch products");
        }
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchEvents();
  }, []);

  //change tab title
  useEffect(() => {
    // Update the browser tab title when events change
    document.title = "Sports Tracker";
  }, [events]);

  const handleAddEvent = async (newEvent) => {
    try {
      const response = await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });
  
      if (response.ok) {
        const updatedEvents = [...events, newEvent];
        setEvents(updatedEvents);
        console.log("Event added successfully!");
      } else {
        console.error("Failed to add event.");
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };
  
  const handleDelete = async (eventId) => {
    try {
      // Send a DELETE request to your server API with the event id
      const response = await fetch(`http://localhost:3000/events/${eventId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the deleted event from the events state
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.id !== eventId)
        );
        console.log("Event deleted successfully!");
      } else {
        console.error("Failed to delete event.");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <>
      <NavBar handleAddEvent={() => setModalOpen(true)} />
      <HomePage />
      <EventsPage events={events} handleDelete={handleDelete} />
      <About />
      <AddEventModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAddEvent={handleAddEvent}
      />
    </>
  );
}

export default App;
