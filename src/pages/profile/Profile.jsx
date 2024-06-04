import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthProvider } from "../../authProvider/FirebaseProvider";


const Profile = () => {

    const {user}=useContext(AuthProvider)
    return (
        <div>
            <Helmet><title>SALORD | Profile</title></Helmet>
            <div className="container mx-auto p-4 md:px-10">
            <h1 className="text-3xl font-bold mb-4 py-5">Profile</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Welcome, {user?.displayName || 'User'}!</h2>
                <p className="mb-4">Email: {user?.email}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2">Recent Activity</h3>
                    
                </div>

              
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2">Statistics</h3>
                    <p>Some interesting statistics here.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2">Settings</h3>
                    <p>Manage your settings here.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Profile;