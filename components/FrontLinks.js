import Link from 'next/link'

const FrontLink = (props) => (
  <div className={"col-lg-4 linkButton"}>
    <Link as={props.title} href={"/"+ props.title}>
      <a className={"frontLink"}>
        {props.svg}
        <img src={"/static/img/" + props.title + ".svg"}/>
        <h2>{props.title}</h2>
        </a>
    </Link>
  </div>
)

export default FrontLink
