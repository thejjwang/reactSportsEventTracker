// Sports Event Tracker app
// interface should include:
// navigation bar
// home page
// events page
// event details page

import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import EventsPage from './components/EventsPage'
import HomePage from './components/HomePage'
import About from './components/About'

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/events");
        if (response.ok) {
          const data = await response.json();
          console.log(data)
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

  return (
    <>
      <NavBar />
      <HomePage />
      <EventsPage events={events}/>
      <About />
    </>
  )
}

export default App
