// import styles from "./CardBusiness.module.scss";
// import { FaHeart } from "react-icons/fa";
// import { Button } from "../Button/Button";
// import { Card } from "../Card/Card";
// import { routes } from "@/navigation/routes/routes";
// import { useNavigate } from "react-router-dom";

// interface ServiceCategoryCardProps {
//   id: string;
//   photoUrl: string;
//   category: string;
//   companyName: string;
//   representative: string;
//   address: string;
//   // isFavorite: boolean;
//   toggleFavorite: () => void;
// }

// export const CardBusiness = ({
//   id,
//   photoUrl,
//   category,
//   companyName,
//   representative,
//   address,
//   // isFavorite,
//   toggleFavorite,
// }: ServiceCategoryCardProps) => {
//   const navigate = useNavigate();

//   const handleBookNow = () => {
//     navigate(routes.BUSINESS_PAGE.replace(":id", id));
//   };

//   return (
//     <Card
//       image={`${photoUrl}`}
//       category={category}
//       title={companyName}
//       subtitle={representative}
//       description={address}
//       cardBody={styles.cardBody}
//       cardClass={styles.card}
//       imgClass={styles.imgStyle}
//       categoryClass={styles.category}
//       titleClass={styles.title}
//       subtitleClass={styles.subtitle}
//       descriptionClass={styles.description}
//       bottomClass={styles.cardBottom}
//     >
//       <Button variant="primary" onClick={handleBookNow}>
//         Book Now
//       </Button>
//       <div onClick={toggleFavorite}>
//         {/* <FaHeart size="2em" className={isFavorite ? styles.favCard : styles.heartIcon} /> */}
//       </div>
//     </Card>
//   );
// };
