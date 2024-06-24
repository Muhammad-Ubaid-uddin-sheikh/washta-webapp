import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';
import Logo from '../../assets/images/image 1.png'
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
            <li>
              <NavLink to="/become-a-seller/dashboard" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/orders" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Orders
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
