import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export function Button({ children, variant, onClick, isSelected }) {
  return (
    <button className={`${styles.button} ${styles[variant]} ${isSelected ? styles.selected : ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};
