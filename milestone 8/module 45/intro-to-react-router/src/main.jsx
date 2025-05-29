import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Users from './components/Users.jsx';
import UserDetails from './components/UserDetails.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router =createBrowserRouter([
  {
    path: '/',
    element:  <Home/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path: '/users',
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users/>
      },
      {
        path: '/user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails/>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
