import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStore } from "src/context/store";
import api from "src/api/api";
import { IBusiness } from "src/types/business";
import styles from "./BusinessPage.module.scss";

export const BusinessPage = () => {
  const { id } = useParams<{ id: string }>();

  const businesses = useStore((state) => state.businesses);
  const business = businesses?.find((b) => b.id === id);

  console.log(business?.address);

  return <div className={styles.businessPage}>test</div>;
};
