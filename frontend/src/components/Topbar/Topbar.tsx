import { useEffect, useRef, useState } from "react";
import { IoLogoTux } from "react-icons/io";
import { Button } from "../Button/Button";
import styles from "./Topbar.module.scss";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../navigation/routes/routes";
import { useStore } from "../../context/store";
import { Pill } from "../Pill/Pill";

const navLinks = [
  { name: "Home", path: routes.HOME },
  { name: "Services", path: routes.SERVICES },
  { name: "About Us", path: routes.ABOUT_US },
];

export function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  const logOutUser = useStore((state) => state.logOutUser);

  const handlePillClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && pillRef.current && !pillRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.topbarContainer}>
      <div className={styles.logoSection}>
        <IconContext.Provider value={{ color: "#7A58EF", size: "4em" }}>
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
            <div ref={pillRef}>
              <Pill text={user.userName.substring(0, 1).toUpperCase()} onClick={handlePillClick} />
            </div>
            {menuOpen && (
              <div className={styles.menu} ref={menuRef}>
                <button
                  onClick={() => {
                    const userAccountPage = routes.ACCOUNT_PAGE;
                    navigate(userAccountPage);
                    setMenuOpen(false);
                  }}
                >
                  My Account
                </button>
                <button
                  onClick={() => {
                    const userBookingRoute = routes.BOOKING_PAGE.replace(":email", user.email);
                    navigate(userBookingRoute);
                    setMenuOpen(false);
                  }}
                >
                  My Bookings
                </button>
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
