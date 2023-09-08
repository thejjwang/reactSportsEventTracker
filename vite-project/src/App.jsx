// Sports Event Tracker app
// interface should include:
// navigation bar
// home page
// events page
// event details page
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
  
  return (
    <>
      <NavBar handleAddEvent={() => setModalOpen(true)} />
      <HomePage />
      <EventsPage events={events}/>
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
