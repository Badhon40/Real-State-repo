import { useContext } from "react";
import { AuthProvider } from "../authProvider/FirebaseProvider";


const PrivateRoute = () => {
    const {user}=useContext(AuthProvider)
    if(user)
        {
            
        }
};

export default PrivateRoute;