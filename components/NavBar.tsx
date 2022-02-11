import React from "react";
import Link from "next/link";
import Arrow from "../svg/arrow-left.svg";

interface NavBarProps {
  url: string;
}

const NavBar: React.FC<NavBarProps> = ({ url }) => {
  return (
    <header className={"navBar"}>
      <Link href={url}>
        <a className={"navBarLink"}>
          <Arrow
            className={"arrow chameleon highLightOnHover"}
            aria-label={"Previous page"}
          />
        </a>
      </Link>
    </header>
  );
};

export default NavBar;
