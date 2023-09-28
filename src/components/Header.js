import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';

function Header() {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'calculator', text: 'Calculator' },
    { path: 'Quote', text: 'Quote' },
  ];

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Math Magicians</h1>
      <ul className={styles.navbar}>
        {links.map((link, index) => (
          <React.Fragment key={link.text}>
            <li>
              <NavLink className={styles.navItem} to={link.path}>{link.text}</NavLink>
            </li>
            {index <= 1 && <div className={styles.separator} />}
          </React.Fragment>
        ))}
      </ul>
    </header>
  );
}

export default Header;
