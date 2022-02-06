import Link from "next/link";
import React from "react";

interface BigLinkButtonProps {
  link: string;
  children: JSX.Element;
  title: string;
}

const BigLinkButton: React.FC<BigLinkButtonProps> = ({
  link,
  children,
  title,
}) => (
  <div className={"bigLinkButton"}>
    <Link as={link} href={link}>
      <a className={"chameleon highLightOnHover"}>
        {children}
        <h2>{title}</h2>
      </a>
    </Link>
  </div>
);

export default BigLinkButton;
