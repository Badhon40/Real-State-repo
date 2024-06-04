import { createBrowserRouter } from "react-router-dom";
import Root from "../conponents/root/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import About from "../pages/about/About";
import ContactUs from "../pages/contactUs/ContactUs";
import Profile from "../pages/profile/Profile";
import PrivateRoute from "../private/PrivateRoute";
import Details from "../conponents/details/Details";



const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch("/data.json")
            },
            {
                path:'/card/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader:()=>fetch(`../data.json`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contactUs',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
           
            
        ] 
    }
])


export default Routes;