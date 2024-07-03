import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export function Button({ children, buttonType, onClick, isSelected }) {
  return (
    <button className={`${styles.button} ${styles[buttonType]} ${isSelected ? styles.selected : ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};
