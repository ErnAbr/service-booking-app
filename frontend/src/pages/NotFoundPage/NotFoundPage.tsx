import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";
import { Button } from "src/components/Button/Button";
import { routes } from "src/navigation/routes/routes";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.message}>Sorry, the page you are looking for does not exist.</p>
      <Button
        variant="primary"
        onClick={() => {
          navigate(routes.HOME);
        }}
      >
        Go To Home Page
      </Button>
    </div>
  );
};
