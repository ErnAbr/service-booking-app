import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import styles from "./Category.module.scss";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { categories } from "../../constants/categoryData";

export const Category = ({ iconSize }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    const toggleCategory = selectedCategory !== category.toLowerCase() ? category.toLowerCase() : "";
    setSelectedCategory(toggleCategory);
    navigate(toggleCategory ? `/?category=${toggleCategory}` : "/");
  };

  return (
    <div className={styles.categoryContainer}>
      {categories.map((category, index) => (
        <Button
          key={index}
          variant="square"
          onClick={() => handleCategoryClick(category.text)}
          isSelected={selectedCategory === category.text.toLowerCase()}
        >
          <div>
            <IconContext.Provider value={{ color: category.color, size: iconSize }}>
              <category.icon />
            </IconContext.Provider>
            {category.text}
          </div>
        </Button>
      ))}
    </div>
  );
};

Category.propTypes = {
  iconSize: PropTypes.string,
};
