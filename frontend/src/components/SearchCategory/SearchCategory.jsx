import PropTypes from "prop-types";
import { CardGrid } from "../CardGrid/CardGrid";
import { Category } from "../Category/Category";

export const SearchCategory = ({ category }) => {
  return (
    <div>
      <Category />
      <CardGrid category={category} />
    </div>
  );
};

SearchCategory.propTypes = {
  category: PropTypes.string,
};
