import Arrow from '../svg/arrow-left.svg?sprite'
import React from 'react'
import Link from "next/link";

const NavBar = (props) => (
  <Link href={props.url}>
    <a className={"navBar"}>
      <div>
        <Arrow
          className={"arrow"}
          aria-label={"Previous page"}
        />
      </div>
    </a>
  </Link>
)

export default NavBar
