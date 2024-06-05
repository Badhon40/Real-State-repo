// src/pages/UpdateProfile.js
import { useContext, useState } from 'react';

import { updateProfile } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../../authProvider/FirebaseProvider';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
  const { user } = useContext(AuthProvider);
  const [name, setName] = useState(user.displayName || '');
  const [photoURL, setPhotoURL] = useState(user.photoURL || '');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, { displayName: name, photoURL });
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error(`Error updating profile: ${error.message}`);
    }
  };

  return (
    <div className="w-full mx-auto max-w-md my-10 p-8 space-y-3 rounded-xl dark:bg-gray-100 dark:text-gray-800">
      <Helmet><title>SALORD | Update</title></Helmet>
      <h1 className="text-3xl font-bold mb-4">Update Profile</h1>
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            value={user.email}
            disabled
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
          />
        </div>
        <button type="submit" className="btn bg-red-600">Save Changes</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
