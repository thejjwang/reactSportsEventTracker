// Sports Event Tracker app
// interface should include:
// navigation bar
// home page
// events page
// event details page

import NavBar from './components/NavBar'
import EventsPage from './components/EventsPage'
import HomePage from './components/HomePage'
import About from './components/About'

function App() {
  
  return (
    <>
      <NavBar />
      <HomePage />
      <EventsPage />
      <About />
    </>
  )
}

export default App
