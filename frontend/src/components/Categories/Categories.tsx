import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Categories.module.scss";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { useCategories } from "@/api/queryCategories";
import { iconMapping } from "@/utils/iconMapping";

interface CategoryProps {
  iconSize: string;
}

export const Categories = ({ iconSize }: CategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { data: categories } = useCategories();
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    const toggleCategory =
      selectedCategory !== categoryName.toLowerCase() ? categoryName.toLowerCase() : "";
    setSelectedCategory(toggleCategory);
    navigate(toggleCategory ? `/?category=${toggleCategory}` : "/");
  };

  return (
    <>
      <h3 className={styles.categoryHeading}>Categories</h3>
      <div className={styles.categoryContainer}>
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category, index) => {
            const IconComponent = iconMapping[category.imageUrl];
            return (
              <Button
                key={index}
                variant="square"
                onClick={() => handleCategoryClick(category.categoryName)}
                isSelected={selectedCategory === category.categoryName.toLowerCase()}
              >
                <div className={styles.buttonContent}>
                  <IconContext.Provider value={{ color: category.backgroundColor, size: iconSize }}>
                    <IconComponent />
                  </IconContext.Provider>
                  {category.categoryName}
                </div>
              </Button>
            );
          })
        ) : (
          <div>No categories available</div>
        )}
      </div>
    </>
  );
};
