import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Category.module.scss";
import { MdOutlineCleaningServices, MdPlumbing, MdElectricBolt } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { PiPaintBrushHouseholdBold } from "react-icons/pi";
import { FaTruckMoving } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const categories = [
  { icon: MdOutlineCleaningServices, color: "#BA1FED", text: "Cleaning" },
  { icon: GiAutoRepair, color: "#EEB625", text: "Repair" },
  { icon: PiPaintBrushHouseholdBold, color: "#049B9D", text: "Painting" },
  { icon: FaTruckMoving, color: "#E53E3E", text: "Shifting" },
  { icon: MdPlumbing, color: "#E99114", text: "Plumbing" },
  { icon: MdElectricBolt, color: "#0064C2", text: "Electric" },
];

export const Category = () => {
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
          buttonType="square"
          onClick={() => handleCategoryClick(category.text)}
          isSelected={selectedCategory === category.text.toLowerCase()}
        >
          <div>
            <IconContext.Provider value={{ color: category.color, size: "2em" }}>
              <category.icon />
            </IconContext.Provider>
            {category.text}
          </div>
        </Button>
      ))}
    </div>
  );
};
