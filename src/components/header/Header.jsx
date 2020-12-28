import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as LogoHome } from "../../assets/dogs.svg";
import { UserContext } from "../../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Logo Home">
          <LogoHome />
        </Link>
        {data ? (
          <Link className={styles.login} to="/profile">
            {data.name}
          </Link>
        ) : (
            <Link className={styles.login} to="/login">
              Login / Sign In
            </Link>
          )}
      </nav>
      {/* TODO fazer header pos Auth */}
    </header>
  );
};

export default Header;
