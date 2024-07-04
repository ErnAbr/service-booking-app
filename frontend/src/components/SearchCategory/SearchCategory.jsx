import PropTypes from "prop-types";
import { Category } from "../Category/Category";
import { CardCategoryGrid } from "../CardCategoryGrid/CardCategoryGrid";

export const SearchCategory = ({ category }) => {
  return (
    <div>
      <Category iconSize="2em" />
      <CardCategoryGrid category={category} />
    </div>
  );
};

SearchCategory.propTypes = {
  category: PropTypes.string,
};
