
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './layouts/Nav'
import Home from './pages/Home'


function App() {

  return (
    <>
   <Nav/>
   <Outlet/>
    </>
  )
}

export default App
