import React from "react";
import Link from "next/link";
import { Svg } from "react-optimized-image";
import Arrow from "../svg/arrow-left.svg";

const NavBar = (props) => {
  const { url } = props;
  return (
    <Link href={url}>
      <a className={"navBar"}>
        <div>
          <Svg
            src={Arrow}
            className={"arrow chameleon highLightOnHover"}
            aria-label={"Previous page"}
          />
        </div>
      </a>
    </Link>
  );
};

export default NavBar;
