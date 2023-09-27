import styles from '../styles/header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Math Magicians</h1>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>Home</li>
        <div className={styles.separator} />
        <li className={styles.navItem}>Calculator</li>
        <div className={styles.separator} />
        <li className={styles.navItem}>About</li>
      </ul>
    </header>
  );
}

export default Header;
