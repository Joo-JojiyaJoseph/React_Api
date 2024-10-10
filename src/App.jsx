
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './layouts/Nav'
import Footer from './layouts/Footer'
import { HelmetProvider } from 'react-helmet-async'


function App() {

  return (
    <>
   <HelmetProvider>
   <Nav/>
   <Outlet/>
   <Footer/>
   </HelmetProvider>
    </>
  )
}

export default App
