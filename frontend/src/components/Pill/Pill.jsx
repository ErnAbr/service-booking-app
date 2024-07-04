import styles from "./Pill.module.scss";
import PropTypes from "prop-types";

export const Pill = ({ text, onClick }) => {
  return (
    <div className={styles.pill} onClick={onClick}>
      {text}
    </div>
  );
};

Pill.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
