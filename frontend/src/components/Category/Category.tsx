import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Category.module.scss";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { useStore } from "src/context/store";
import { iconMapping } from "src/constants/iconMapping";

interface CategoryProps {
  iconSize: string;
}

export const Category = ({ iconSize }: CategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const categories = useStore((state) => state.categories);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    const toggleCategory =
      selectedCategory !== categoryName.toLowerCase() ? categoryName.toLowerCase() : "";
    setSelectedCategory(toggleCategory);
    navigate(toggleCategory ? `/?category=${toggleCategory}` : "/");
  };

  return (
    <div className={styles.categoryContainer}>
      {categories?.map((category, index) => {
        const IconComponent = iconMapping[category.imageUrl];
        return (
          <Button
            key={index}
            variant="square"
            onClick={() => handleCategoryClick(category.categoryName)}
            isSelected={selectedCategory === category.categoryName.toLowerCase()}
          >
            <div>
              <IconContext.Provider value={{ color: category.backgroundColor, size: iconSize }}>
                <IconComponent />
              </IconContext.Provider>
              {category.categoryName}
            </div>
          </Button>
        );
      })}
    </div>
  );
};
