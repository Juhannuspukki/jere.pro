import Arrow from '../svg/arrow-left.svg'
import Router from 'next/router'
import React from 'react'


const NavBar = () => (
  <div className={"navBar"}>
    <div onClick={() => Router.back()}><Arrow className={"arrow"}/></div>
  </div>
)

export default NavBar
