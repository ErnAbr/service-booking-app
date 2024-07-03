import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";
import { FaLock } from "react-icons/fa";
import { routes } from "../../navigation/routes";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../context/store";

const schema = yup
  .object({
    userName: yup.string().required("First Name is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });

  const setUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);
  const navigate = useNavigate();

  if (user) navigate("/");

  const onSubmit = (data) => {
    setUser(data.userName);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <div className={styles.formHeader}>
          <FaLock color="#7b58efb4" size="2.5em" className={styles.lockIcon} />
          <h3 className={styles.formTitle}>Please Log In</h3>
        </div>
        <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>
            <label>Enter Your Username</label>
            <input
              {...register("userName", { required: true, maxLength: 20 })}
              className={errors.userName ? styles.error : ""}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Enter Your Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className={errors.password ? styles.error : ""}
            />
          </div>

          <Button buttonType="primary" type="submit">
            Log In
          </Button>
        </form>
      </div>
      <h3>
        Do not have an account? Sign up <Link to={routes.REGISTER}>Here</Link>
      </h3>
    </div>
  );
};
