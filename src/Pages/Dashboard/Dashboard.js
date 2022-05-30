import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

  const [user]=useAuthState(auth);
  const [admin]=useAdmin(user);


    return (
        <div>
            <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">

<h2 className='text-2xl font-bold text-orange-500'>Welcome to your Dashboard</h2>
<Outlet></Outlet>

  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-40 bg-black font-bold text-white">
      {/* <!-- Sidebar content here --> */}
      <li><NavLink to='/dashboard'>My Order</NavLink></li>
      <li><NavLink to='/dashboard/review'>My Reviews</NavLink></li>
      <li><NavLink to='/dashboard/history'>My History</NavLink></li>
      {admin && <>
        <li><Link to='/dashboard/users'>All Users</Link></li>
        <li><Link to='/dashboard/users'>Add Products</Link></li>
      </>}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;