import React from 'react';
import headerImg from '../../assets/images/image 1.png'
const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={headerImg} alt="Logo" style={styles.logo} />
      </div>
      {/* <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#">Home</a></li>
          <li style={styles.navItem}><a href="#">About</a></li>
          <li style={styles.navItem}><a href="#">Contact</a></li>
        </ul>
      </nav> */}
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
  },
  navItem: {
    marginLeft: '20px',
  },
};

export default Header;
