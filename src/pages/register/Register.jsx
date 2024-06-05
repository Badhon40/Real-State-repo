import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthProvider } from "../../authProvider/FirebaseProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthProvider);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name, photo } = data;

    if (password.length < 6) {
      toast.error("Password Should be Atleast 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Use Atleast one Uppercase");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Use Atleast one Lowercase");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        toast.success("Register Successfully");
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            toast.error("Email is already in use");
            break;
          case 'auth/invalid-email':
            toast.error("Invalid email address");
            break;
          case 'auth/weak-password':
            toast.error("Password is too weak");
            break;
          default:
            toast.error(`Error: ${error.message}`);
            break;
        }
      });
  };

  return (
    <div className="w-full mx-auto max-w-md my-10 p-8 space-y-3 rounded-xl dark:bg-gray-100 dark:text-gray-800">
      <Helmet><title>SALORD | Registration</title></Helmet>
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block dark:text-gray-600">Name</label>
          <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border" {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photo" className="block dark:text-gray-600">Photo URL</label>
          <input {...register("photo")} type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border" />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">Email</label>
          <input  {...register("email", { required: true })} type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border" />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="space-y-1 text-sm">
          <label className="input input-bordered flex items-center gap-2">
            <input {...register("password", { required: true })} type={showPassword ? "text" : "password"} name="password" id="password" placeholder="*****" className="grow" required />
            {errors.password && <span>This field is required</span>}
            <span onClick={() => setShowPassword(!showPassword)}>
              {!showPassword ? <IoEyeSharp></IoEyeSharp> : <IoEyeOffSharp></IoEyeOffSharp>}
            </span>
          </label>
          <div className="flex justify-end text-xs dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
          </div>
        </div>
        <button className="btn block w-full p-3 text-center rounded-lg dark:text-gray-50 dark:bg-red-600">Sign Up</button>
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">Do have an account?
        <Link to='/login' className="underline dark:text-red-600 ">Sign in</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Register;
