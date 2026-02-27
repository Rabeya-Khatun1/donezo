import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { StrictMode } from 'react';
import DonezoDashboard from './components/Dashboard';
import Home from './components/Home'
import Task from './components/Task';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DonezoDashboard></DonezoDashboard>,
    children: [
      {
        index: true,
        element: <Home></Home>, 
      },
      {
        path: '/tasks',
        element: <Task></Task>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>
);