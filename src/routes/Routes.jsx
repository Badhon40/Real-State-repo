import { createBrowserRouter } from "react-router-dom";
import Root from "../conponents/root/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import About from "../pages/about/About";
import ContactUs from "../pages/contactUs/ContactUs";
import Profile from "../pages/profile/Profile";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
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
                element:<Profile></Profile>
            }
            
        ] 
    }
])


export default Routes;