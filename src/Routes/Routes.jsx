import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import Mytoys from "../pages/MyToys/Mytoys";
import AddToy from "../pages/AddToy/AddToy";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        }, 
        {
            path: '/allToys',
            element: <AllToys></AllToys>,
        }, 
        {
            path: '/myToys',
            element: <PrivateRoute><Mytoys></Mytoys></PrivateRoute>,
        }, 
        {
            path: '/addToy',
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
        }, 
        {
            path: '/register',
            element: <Register></Register>,
        }, 
        {
            path: '/login',
            element: <Login></Login>,
        }, 
        
      ]
    },
  ]);

  export default router;