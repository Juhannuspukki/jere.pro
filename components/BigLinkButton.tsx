import Link from "next/link";
import React from "react";

interface BigLinkButtonProps {
  collapseOnMedium: boolean;
  link: string;
  children: JSX.Element;
  title: string;
}

const BigLinkButton: React.FC<BigLinkButtonProps> = ({
  collapseOnMedium,
  link,
  children,
  title,
}) => (
  <div
    className={
      collapseOnMedium
        ? "col-md-4 col-6 bigLinkButton"
        : "col-md-4 bigLinkButton"
    }
  >
    <Link as={link} href={link}>
      <a className={"chameleon highLightOnHover"}>
        {children}
        <h2>{title}</h2>
      </a>
    </Link>
  </div>
);

export default BigLinkButton;
