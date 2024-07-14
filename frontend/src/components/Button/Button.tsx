import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: JSX.IntrinsicElements["button"]["onClick"];
  children: React.ReactNode;
  variant: "primary" | "search" | "square";
  isSelected?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, variant, onClick, isSelected }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
