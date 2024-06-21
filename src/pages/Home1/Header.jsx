import React from 'react';
import headerImg from '../../assets/images/image 1.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'components';
const Header = () => {
  const navgattion = useNavigate()
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
       <NavLink to='/' className='marginclass'> <img src={headerImg} alt="Logo" style={styles.logo} /></NavLink>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
              <Button onClick={()=> navgattion('/become-a-seller')}  shape="round" className="min-w-[100px] sm:px-1" style={{fontSize:'15px',background:'white',color:'black'}}>
                    Sign in
                  </Button>
                  <Button onClick={()=> navgattion('/become-a-seller')}   shape="round" className="min-w-[120px] sm:px-1" style={{fontSize:'15px',background:'white',color:'black'}}>
                    Become A Seller
                  </Button>
         
         
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position:'absolute',
    padding: '10px',
    color: 'white',
    zIndex: 99,
    width:'95%'
  },
  logoContainer: {
    marginLeft: '10px',
  },
  logo: {
    width: '170px',
  },
  nav: {
    marginRight: '10px',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap:20
  },
  navItem: {
    marginLeft: '20px',
  },
};

export default Header;
