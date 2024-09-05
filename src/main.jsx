
import {createBrowserRouter, RouterProvider,} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';

import ContextProvider from './context/AppContext';


const router = createBrowserRouter([
    {
          path: "/", element:<App/>,
          children:[
            {
                path: "/", element:<Home/>,
            },
            {
              path: "/about", element:<About/>,
          }
          ]
        
    },
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>

)
