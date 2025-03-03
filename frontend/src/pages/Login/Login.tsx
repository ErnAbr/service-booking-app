import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";
import { FaLock } from "react-icons/fa";
import { routes } from "../../navigation/routes/routes";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../context/store";
import { InputField } from "../../components/InputField/InputField";
import { api } from "@/api/api";
import { toast } from "react-toastify";
import { handleApiError } from "@/utils/handleApiErrors";
import { ApiError } from "@/types/error";

const schema = yup
  .object({
    userName: yup.string().required("Your Username is Required"),
    password: yup.string().required("Your Password is Required"),
  })
  .required();

interface LoginFormInputs {
  userName: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });

  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const response = await api.User.login(data);
      setUser(response.user);
      toast.success(response.message);
      navigate(routes.HOME);
    } catch (error) {
      handleApiError(error as ApiError);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <div className={styles.formHeader}>
          <FaLock color="#7b58efb4" size="2.5em" className={styles.lockIcon} />
          <h3 className={styles.formTitle}>Please Log In</h3>
        </div>
        <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Enter Your Username"
            name="userName"
            register={register}
            error={errors.userName}
          />
          <InputField
            label="Enter Your Password"
            name="password"
            type="password"
            register={register}
            error={errors.password}
          />
          <Button variant="primary" type="submit">
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
