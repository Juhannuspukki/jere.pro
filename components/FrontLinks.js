import Link from 'next/link'


const FrontLink = (props) => (
  <div className={"col-lg-4 linkButton"}>
    <Link prefetch as={props.title} href={"/"+ props.title}>
      <a className={"frontLink"}>
        {props.children}
        <h2>{props.title}</h2>
        </a>
    </Link>
  </div>
)

export default FrontLink
