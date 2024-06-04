import { useContext } from "react";
import { AuthProvider } from "../authProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthProvider)
    const location =useLocation()
    if(loading)
        {
        return (<div className="text-center mt-44">
        <span className="loading loading-dots loading-lg"></span>
       </div>)
    }
    if(user){
        return <div>{children}</div>
    }
    else {
        
        return <Navigate to='/login' state={location?.pathname}></Navigate>
    }
   
    
};

export default PrivateRoute;