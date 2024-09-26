
import {createBrowserRouter, RouterProvider,} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';

import ContextProvider from './context/AppContext';
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Project from "./pages/Project.jsx";
import Services from "./pages/Services.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";


const router = createBrowserRouter([
    {
          path: "/", element:<App/>,
          // path: "/", element:<Home/>,
          children:[
            { index: true, element: <Home/> },
            { path: "home", element:<Home/>,},
            { path: "about", element:<About/>, },
            { path: "gallery", element:<Gallery/>,},
            { path: "project", element:<Project/>, },
            { path: "services", element:<Services/>,},
            { path: "contact", element:<Contact/>, },
            { path: "project/:id", element: <ProjectDetail/> },
          ]
        
    },
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>

)
