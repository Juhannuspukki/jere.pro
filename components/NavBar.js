import Arrow from '../svg/arrow-left.svg'
import React from 'react'
import Link from "next/link";

const NavBar = (props) => (
  <div className={"navBar"}>
    <p className="navText">
    <Link prefetch href={props.url}>
      <a><Arrow className={"arrow"} aria-label={"Previous page"}/></a>
    </Link>
    </p>
  </div>
)

export default NavBar
