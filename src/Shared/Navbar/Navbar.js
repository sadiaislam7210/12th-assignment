import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Navbar = () => {

    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/part'>Parts</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>

{
    user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
}

        
        <li>{user ? <button className="btn btn-info" onClick={logout}>Sign Out</button> :
            <NavLink to='/login'>Login</NavLink>}</li>
    </>
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-black text-white px-12 font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label >
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52" >
                            {menuItems}
                        </ul >
                    </div >
                    <NavLink to='/' className="btn btn-ghost normal-case text-2xl font-bold">CAR<span className='text-red-400'>CORNER</span></NavLink >
                </div >
                <div className="navbar-center hidden lg:flex" >
                    <ul className="menu menu-horizontal p-0" >
                        {menuItems}
                    </ul >
                </div >
                <div className="navbar-end" >
<div>
<label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label >
</div>

                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src={user?.photoURL || ''} />
                        </div>
                    </div>

                </div >
            </div >
        </div >
    );
};

export default Navbar;