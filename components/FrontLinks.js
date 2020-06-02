import Link from 'next/link'
import React from 'react'


const FrontLink = (props) => (
  <div className={"col-md-4 linkButton"}>
    <Link as={props.title} href={"/"+ props.title}>
      <a className={"frontLink"}>
        {props.children}
        <h2>{props.title}</h2>
      </a>
    </Link>
  </div>
);

export default FrontLink
