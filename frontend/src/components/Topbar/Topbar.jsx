import { useState } from "react";
import { IoLogoTux } from "react-icons/io";
import { Button } from "../Button/Button";
import styles from "./Topbar.module.scss";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../navigation/routes";
import { useStore } from "../../context/store";
import { Pill } from "../Pill/Pill";

const navLinks = [
  { name: "Home", path: routes.HOME },
  { name: "Services", path: routes.SERVICES },
  { name: "About Us", path: routes.ABOUT_US },
];

export function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  const logOutUser = useStore((state) => state.logOutUser);

  const handlePillClick = () => {
    setMenuOpen(!menuOpen);
  };

  console.log(user);

  return (
    <div className={styles.topbarContainer}>
      <div className={styles.logoSection}>
        <IconContext.Provider value={{ color: "#7A58EF", size: "4em", title: "Logoipsum" }}>
          <IoLogoTux />
        </IconContext.Provider>
        <span>Logoipsum</span>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            {navLinks.map((link, index) => (
              <li key={index} className={styles.navItem}>
                <Link className={styles.navLink} to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.authSection}>
        {user ? (
          <>
            <Pill text={user.substring(0, 1).toUpperCase()} onClick={handlePillClick} />
            {menuOpen && (
              <div className={styles.menu}>
                <button onClick={() => logOutUser(setMenuOpen, navigate)}>Logout</button>
              </div>
            )}
          </>
        ) : (
          <Button onClick={() => navigate(routes.LOGIN)} variant="primary">
            Login / Sign Up
          </Button>
        )}
      </div>
    </div>
  );
}
