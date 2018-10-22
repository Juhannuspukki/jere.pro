import Link from 'next/link'
import Arrow from '../svg/arrow-left.svg'


const Header = () => (
  <div className={"navBar"}>
    <Link href={"/main-menu"}>
      <a className={"navBar"}>
        <Arrow className={"arrow"}/>
      </a>
    </Link>
  </div>
)

export default Header
