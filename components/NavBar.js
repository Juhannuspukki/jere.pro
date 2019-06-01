import Arrow from '../svg/arrow-left.svg'
import React from 'react'
import Link from "next/link";

const NavBar = (props) => (
  <div className={"navBar"}>
    <Link prefetch href={props.url}>
      <a><Arrow className={"arrow"}/></a>
    </Link>
  </div>
)

export default NavBar
