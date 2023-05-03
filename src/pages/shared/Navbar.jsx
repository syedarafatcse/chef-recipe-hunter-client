import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
   const { user, logout } = useContext(AuthContext);

   // console.log(userInfo);

   const handleLogout = () => {
      logout()
         .then(result => { })
         .catch()
   }

   return (

      <div className="navbar bg-blue-100 w-full max-w-7xl mx-auto">
         <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Chef Master</a>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
               {/* <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : '')} > Books </NavLink> */}

               <NavLink to='/' className={({ isActive }) => (isActive ? 'btn text-yellow-500' : 'btn')}> Home</NavLink>
               <NavLink to='/blog' className={({ isActive }) => (isActive ? 'btn text-yellow-500' : 'btn')}> Blog</NavLink>
               {user ? <NavLink to='/' className={({ isActive }) => (isActive ? 'btn text-yellow-500' : 'btn')} onClick={handleLogout} >Logout</NavLink> : <NavLink to='/login' className={({ isActive }) => (isActive ? 'btn text-yellow-500' : 'btn')}> Login</NavLink>}

               {user && <> <li tabIndex={0}>
                  <a>
                     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                           <img src={user && user.photoURL} />
                        </div>
                     </label>
                  </a>

                  <ul className="p-2 bg-base-100">
                     <li><a>{user && user.displayName}</a></li>
                  </ul>
               </li>

               </>}

            </ul>
         </div>
      </div>
   );
};

export default Navbar;