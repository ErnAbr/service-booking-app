import PropTypes from "prop-types";

export const Card = ({
  image,
  category,
  title,
  subtitle,
  description,
  children,
  cardBody,
  cardClass,
  imgClass,
  categoryClass,
  titleClass,
  subtitleClass,
  descriptionClass,
  bottomClass,
}) => {
  return (
    <div className={cardClass}>
      <img className={imgClass} src={image} alt="card-image" />
      <div className={cardBody}>
        <div>
          <div className={categoryClass}>{category}</div>
        </div>
        <h4 className={titleClass}>{title}</h4>
        <div>
          <div className={subtitleClass}>{subtitle}</div>
          <p className={descriptionClass}>{description}</p>
        </div>
        <div className={bottomClass}>{children}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
  cardBody: PropTypes.string,
  cardClass: PropTypes.string,
  imgClass: PropTypes.string,
  categoryClass: PropTypes.string,
  titleClass: PropTypes.string,
  subtitleClass: PropTypes.string,
  descriptionClass: PropTypes.string,
  bottomClass: PropTypes.string,
};
