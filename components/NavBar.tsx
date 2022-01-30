import React from "react";
import Link from "next/link";
import Arrow from "../svg/arrow-left.svg";

interface NavBarProps {
  url: string;
}

const NavBar: React.FC<NavBarProps> = ({ url }) => {
  return (
    <header>
      <Link href={url}>
        <a className={"navBar"}>
          <div>
            <Arrow
              className={"arrow chameleon highLightOnHover"}
              aria-label={"Previous page"}
            />
          </div>
        </a>
      </Link>
    </header>
  );
};

export default NavBar;
