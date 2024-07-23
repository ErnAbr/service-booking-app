import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  heading?: string;
  gridContainerClass?: string;
  headingClass?: string;
  gridClass?: string;
}

export const Grid = ({
  children,
  heading,
  gridContainerClass,
  headingClass,
  gridClass,
}: GridProps) => {
  return (
    <>
      <h3 className={headingClass}>{heading}</h3>
      <div className={gridContainerClass}>
        <div className={gridClass}>{children}</div>
      </div>
    </>
  );
};
