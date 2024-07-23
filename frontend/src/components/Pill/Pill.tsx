import styles from "./Pill.module.scss";

interface PillProps {
  text: string;
  onClick: () => void;
}

export const Pill = ({ text, onClick }: PillProps) => {
  return (
    <div className={styles.pill} onClick={onClick}>
      {text}
    </div>
  );
};
