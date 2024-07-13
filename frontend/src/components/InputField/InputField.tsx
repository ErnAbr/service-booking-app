import { FieldError, UseFormRegister } from "react-hook-form";
import styles from "./InputField.module.scss"; // Create a corresponding CSS module file

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

export const InputField = ({ label, name, type = "text", register, error }: InputFieldProps) => {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input {...register(name)} type={type} className={error ? styles.error : ""} />
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
};
