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
  const { data: categories, error, isLoading } = useCategories();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  console.log('Categories Data:', categories); // Log the categories data

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
            console.log(`Category ${index}:`, category); // Log each category
            const IconComponent = iconMapping[category.imageUrl];
            if (!IconComponent) {
              console.error(`No icon found for ${category.imageUrl}`);
              return null; // Skip rendering if no icon is found
            }
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
          <p>No categories available</p>
        )}
      </div>
    </>
  );
};
