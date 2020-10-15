import Link from "next/link";
import React from "react";

const BigLinkButton = (props) => (
  <div
    className={
      props.collapseOnMedium
        ? "col-md-4 col-6 bigLinkButton"
        : "col-md-4 bigLinkButton"
    }
  >
    <Link as={props.link} href={props.link}>
      <a className={"chameleon highLightOnHover"}>
        {props.children}
        <h2>{props.title}</h2>
      </a>
    </Link>
  </div>
);

export default BigLinkButton;
