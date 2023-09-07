// Sports Event Tracker app
// interface should include:
// navigation bar
// home page
// events page
// event details page

import { useState } from 'react'
import NavBar from './components/NavBar'
import EventsDetailsPage from './components/EventsDetailsPage'
import EventsPage from './components/EventsPage'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <HomePage />
      <EventsPage />
      <EventsDetailsPage />
    </>
  )
}

export default App
