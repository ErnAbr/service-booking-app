import PropTypes from "prop-types";

export const Grid = ({ children, heading, gridContainerClass, headingClass, gridClass }) => {
  return (
    <div className={gridContainerClass}>
      <h3 className={headingClass}>{heading}</h3>
      <div className={gridClass}>{children}</div>
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
  gridContainerClass: PropTypes.string,
  headingClass: PropTypes.string,
  gridClass: PropTypes.string,
};
