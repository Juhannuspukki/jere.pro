import Link from 'next/link'
import "../styles/style.scss"

const Index = () => (
  <div className={"test"}>
    <Link prefetch href={"/main-menu"}>
      <a className={"fullPageContainer"}>
        <h1 className={"dotPro"}>jere.pro</h1>
      </a>
    </Link>
  </div>
)

export default Index
