
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './layouts/Nav'
import Footer from './layouts/Footer'


function App() {

  return (
    <>
   <Nav/>
   <Outlet/>
   <Footer/>
    </>
  )
}

export default App
