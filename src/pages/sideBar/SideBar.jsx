import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';
import Logo from '../../assets/images/image 1.png'
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaRegRectangleList } from "react-icons/fa6";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { BsPatchCheck } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

function Sidebar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div className="menu-icon" onClick={toggleDrawer}>
        &#9776;
      </div>
      <div className={`sidebar ${drawerOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src={Logo} style={{height:'100%',width:'100%',objectFit:'contain'}}/>
         </div>
        <nav className='navbar-sidebar'>
          <ul>
            <li className='li-navbar'>
              <NavLink to="/become-a-seller/dashboard" end className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag')}>
              <RiDashboardHorizontalLine style={{fontSize:20}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag ')} />
               <p style={{paddingBottom:0}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatagnew')}>  Dashboard </p>
               
               

              </NavLink>
            </li>
            <li className='li-navbar'> 
            <NavLink to="/become-a-seller/invoices" end className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag')}>
              <LiaFileInvoiceSolid style={{fontSize:22}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag ')} />
               <p style={{paddingBottom:0}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatagnew')}>  Invoices </p>
               
               

              </NavLink>
            </li>
            <li className='li-navbar'>
            <NavLink to="/become-a-seller/orders" end className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag')}>
              <FaRegRectangleList style={{fontSize:18}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag ')} />
               <p style={{paddingBottom:0}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatagnew')}>  Orders </p>
               
              

              </NavLink>
            </li>
            <li className='li-navbar'>
            <NavLink to="/become-a-seller/shops" end className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag')}>
              < PiShoppingBagOpenBold  style={{fontSize:20}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag ')} />
               <p style={{paddingBottom:0}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatagnew')}>  Shops </p>
               
              

              </NavLink>
            </li>
            <li className='li-navbar'>
            <NavLink to="/become-a-seller/rating-and-reviews" end className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag')}>
              < BsPatchCheck   style={{fontSize:19}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag ')} />
               <p style={{paddingBottom:0}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatagnew')}>  Ratings & Reviews </p>
               
              

              </NavLink>
            </li>
            <li className='li-navbar'>
            <NavLink to="/become-a-seller/notification" end className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag')}>
              < IoNotificationsOutline   style={{fontSize:19}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag ')} />
               <p style={{paddingBottom:0}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatagnew')}>  Notifications </p>
               
              

              </NavLink>
            </li>
          </ul>
          <ul className='ul-list-bottom'>
           
            
            
            <li className='li-navbar'>
            <NavLink to="/become-a-seller/support" end className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag')}>
              < MdOutlineContactSupport  style={{fontSize:20}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag ')} />
               <p style={{paddingBottom:0}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatagnew')}> Support </p>
               
              

              </NavLink>
            </li>
            <li className='li-navbar'>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag')}>
              < AiOutlineLogout   style={{fontSize:19}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag ')} />
               <p style={{paddingBottom:0}} className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatagnew')}>  Logout </p>
               
              

              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;