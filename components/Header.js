import Link from 'next/link'

const Header = () => (
  <div className={"navBar"}>
    <Link href="/#links">
      <a className={"navBar"}>
        <img className={"arrow"} src={"/static/img/arrowLeft.svg"}/>
      </a>
    </Link>
  </div>
)

export default Header
