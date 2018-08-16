import Link from 'next/link'

const FrontLink = (props) => (
    <div className={"col-md-4"}>
      <Link href="/">
        <a className={"frontLink"} href={"/"+ props.title }>
          <img src={"/static/img/" + props.title + ".svg"}/>
          <h2>{props.title}</h2>
          </a>
      </Link>
    </div>
)

export default FrontLink
