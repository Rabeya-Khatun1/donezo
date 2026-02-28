import { createBrowserRouter } from "react-router";
import DonezoDashboard from "../components/pages/Dashboard";
import Team from '../components/pages/NavPages/Team';
import Analytics from '../components/pages/NavPages/Analytics';
import Settings from '../components/pages/NavPages/Settings';
import Help from '../components/pages/NavPages/Help';
import Calendar from '../components/pages/NavPages/Calendar';
import Task from "../components/pages/NavPages/Task"
import Home from "../components/pages/Home";
import Login from "../components/auth/Login";
import PrivateRoute from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><DonezoDashboard></DonezoDashboard></PrivateRoute> ,
    children: [
      {
        index: true,
        element: <Home></Home>, 
      },
      {
        path: '/tasks',
        element: <Task></Task>
      },
      {
        path: '/calendar',
        element: <Calendar></Calendar>
      },
      {
        path: '/team',
        element: <Team></Team>
      },
      {
        path: '/analytics',
        element: <Analytics></Analytics>
      },
      {
        path: '/settings',
        element: <Settings></Settings>
      },
      {
        path: '/help',
        element: <Help></Help>
      },
    ]
  },
  {
    path:'/login',
    element: <Login></Login>

  }
]);