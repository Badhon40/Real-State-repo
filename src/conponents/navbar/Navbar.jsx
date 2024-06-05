import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../../authProvider/FirebaseProvider";



const Navbar = () => {
    const {user,logOut}=useContext(AuthProvider)

    // console.log(user)
    const links=<>
    <li>
        <NavLink to='/'>Home</NavLink>
    </li>
    <li>
        <NavLink to='/about'> About</NavLink>
    </li>
    <li>
        <NavLink to='/contactUs'>Contact Us</NavLink>
    </li>
   {
    user &&  <li>
            <NavLink to='/update'>Update Profile</NavLink>
            </li>
   }
   
   
    </>
    
    return (
        <div className="navbar bg-base-100 md:px-10 shadow">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3">
                {links}
            </ul>
            </div>
           <h1 className="text-3xl font-bold"><span className="text-5xl text-red-600 ">S</span>ALORD</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-3">
            {
                links
            }
            
            </ul>
        </div>
       <div className="navbar-end">
       {
           user? <div className="flex items-center">
            <h1>{user.email}</h1>
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full hover:cursor-pointer" title={user.displayName}>
                
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <Link to='/profile'>Profile</Link>
                </li>
                <li></li>
                <li><button onClick={()=>logOut()}>Logout </button></li>
                
            </ul>
            </div>
           </div>:<Link to='/login'>
                <button className="btn bg-red-500 text-white">Login</button>
                </Link>
        }
       </div>
        </div> 
    );
};

export default Navbar;