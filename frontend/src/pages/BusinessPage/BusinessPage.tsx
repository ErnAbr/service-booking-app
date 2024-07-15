import { useParams } from "react-router-dom";
import { useStore } from "src/context/store";
import styles from "./BusinessPage.module.scss";
import { useEffect } from "react";

export const BusinessPage = () => {
  const { id } = useParams<{ id: string }>();

  const businesses = useStore((state) => state.businesses);
  const business = businesses?.find((b) => b.id === id);

  console.log(business?.address);

  return <div className={styles.businessPage}>test</div>;
};
