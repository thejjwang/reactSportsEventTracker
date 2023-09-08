// Sports Event Tracker app
// interface should include:
// navigation bar
// home page
// events page
// event details page
import { useState } from "react";
import NavBar from "./components/NavBar";
import EventsPage from "./components/EventsPage";
import HomePage from "./components/HomePage";
import About from "./components/About";
import AddEventModal from "./components/AddEventModal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

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
      <EventsPage />
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
