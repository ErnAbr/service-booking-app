import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";
import styles from "./InputField.module.scss";

interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
}

export const InputField = <T extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
}: InputFieldProps<T>) => {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input {...register(name)} type={type} className={error ? styles.error : ""} />
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
};
