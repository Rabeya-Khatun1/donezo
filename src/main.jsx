import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { StrictMode } from 'react';
import DonezoDashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Task from "./components/pages/Task"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

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
<QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />,
</QueryClientProvider>
  </StrictMode>
);