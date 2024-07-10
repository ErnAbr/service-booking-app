import { Category } from "../Category/Category";
import { CardCategoryGrid } from "../CardCategoryGrid/CardCategoryGrid";

interface SearchCategoryProps {
  category: string;
}

export const SearchCategory = ({ category }: SearchCategoryProps) => {
  return (
    <div>
      <Category iconSize="2em" />
      <CardCategoryGrid category={category} />
    </div>
  );
};
