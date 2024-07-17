import React, { ReactNode } from "react";

interface CardProps {
  image: string;
  category: string;
  title: string;
  subtitle: string | ReactNode;
  description: string;
  children?: ReactNode;
  cardBody?: string;
  cardClass?: string;
  imgClass?: string;
  categoryClass?: string;
  titleClass?: string;
  subtitleClass?: string;
  descriptionClass?: string;
  bottomClass?: string;
}

export const Card: React.FC<CardProps> = ({
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
