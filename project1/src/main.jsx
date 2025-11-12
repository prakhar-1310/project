import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './Components/Body.jsx'
import Offer from './Components/Offer.jsx'
import Help from './Components/Help.jsx'
import Signin from './Components/Signin.jsx'
import Cart from './Components/Cart.jsx'
import Error from './Components/Error.jsx'
import RestDetails from './Components/RestDetails.jsx'

const appRouter= createBrowserRouter([
  {
    path: '/',
    element : <App/>,
    errorElement:<Error/>,
    children : [
      {
        path: '/',
        element : <Body/>,
      },
      {
        path: '/offer',
        element :<Offer/>
      },
      {
        path :'/help',
        element : <Help/>
      },
      {
        path : '/signin',
        element : <Signin/>
      },
      {
        path: '/cart',
        element : <Cart/>
      },
      {
        path: '/restaurant/:id',
        element : <RestDetails/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
)
