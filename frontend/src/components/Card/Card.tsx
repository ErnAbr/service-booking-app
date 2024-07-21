import React, { ReactNode } from "react";

interface CardProps {
  image: string;
  category: string;
  title: ReactNode;
  subtitle: ReactNode;
  description: ReactNode;
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
}: CardProps) => {
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
          <div className={descriptionClass}>{description}</div>
        </div>
        <div className={bottomClass}>{children}</div>
      </div>
    </div>
  );
};
