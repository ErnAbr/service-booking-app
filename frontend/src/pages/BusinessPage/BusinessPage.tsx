import { useParams } from "react-router-dom";
import styles from "./BusinessPage.module.scss";

export const BusinessPage = () => {
  const { id } = useParams<{ id: string }>();

  return <div>this is business page</div>;
};
