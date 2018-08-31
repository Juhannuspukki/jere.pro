import FrontLink from '../components/FrontLinks'
import Link from 'next/link'
import "../styles/style.scss"

const Index = () => (
  <div className={"test"}>
    <div className={"fullPageContainer"}>
      <h1 className={"dotPro"}>jere.pro</h1>
      <Link href={"/#links"}>
        <a>
          <img className={"arrow"} src={"/static/img/arrow.svg"}/>
        </a>
      </Link>
    </div>
    <div className={"fullPageContainer lower"} id={"links"}>
      <div className={"container"}>
        <div className={"row"}>
          <FrontLink title={"about"}/>
          <FrontLink title={"projects"}/>
          <FrontLink title={"experience"}/>
        </div>
      </div>
    </div>
  </div>
)

export default Index
