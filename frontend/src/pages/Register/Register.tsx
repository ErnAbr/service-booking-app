import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsFillPencilFill } from "react-icons/bs";
import { routes } from "../../navigation/routes/routes";
import styles from "./Register.module.scss";
import { Button } from "src/components/Button/Button";
import { InputField } from "../../components/InputField/InputField";
import { addYears, differenceInYears } from "date-fns";
import { toast } from "react-toastify";
import { api } from "src/api/api";
import { handleApiError } from "src/utils/handleApiErrors";
import { ApiError } from "src/types/error";

const schema = yup
  .object({
    userName: yup.string().required("User Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid Email")
      .required("Email is required"),
    dateOfBirth: yup
      .date()
      .typeError("Date of Birth is required")
      .max(addYears(new Date(), -18), "You must be at least 18 years old")
      .required("Date of Birth is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    repPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password"),
  })
  .required();

interface RegisterFormInputs {
  userName: string;
  email: string;
  dateOfBirth: Date;
  password: string;
  repPassword: string;
}

const calculateAge = (dateOfBirth: Date) => {
  return differenceInYears(new Date(), new Date(dateOfBirth));
};

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    const { dateOfBirth, ...rest } = data;
    const age = Number(calculateAge(dateOfBirth));
    const submissionData = { ...rest, age };

    try {
      const response = await api.User.register(submissionData);
      toast.success(response.message);
      navigate(routes.LOGIN);
    } catch (error) {
      handleApiError(error as ApiError);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <div className={styles.formHeader}>
          <BsFillPencilFill color="#7b58efb4" size="2.5em" className={styles.lockIcon} />
          <h3 className={styles.formTitle}>Register</h3>
        </div>
        <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Enter Your Username"
            name="userName"
            register={register}
            error={errors.userName}
          />
          <InputField
            label="Enter Your Email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
          />
          <InputField
            label="Enter Your Date of Birth"
            name="dateOfBirth"
            type="date"
            register={register}
            error={errors.dateOfBirth}
          />
          <InputField
            label="Enter Your Password"
            name="password"
            type="password"
            register={register}
            error={errors.password}
          />
          <InputField
            label="Confirm Your Password"
            name="repPassword"
            type="password"
            register={register}
            error={errors.repPassword}
          />
          <Button variant="primary" type="submit">
            Register
          </Button>
        </form>
      </div>
      <h3 className={styles.footerText}>
        Already have an Account? Login <Link to={routes.LOGIN}>Here</Link>
      </h3>
    </div>
  );
};
