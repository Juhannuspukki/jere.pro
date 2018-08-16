import FrontLink from '../components/FrontLinks'

import "../styles/style.scss"

const Index = () => (
    <div className={"test"}>
      <div className={"halfPageContainer"}>
        <h1 className={"dotPro"}>jere.pro</h1>
      </div>
      <div className={"halfPageContainer lower"}>
        <div className={"container"}>
          <div className={"row"}>
            <FrontLink title="about"/>
            <FrontLink title="projects"/>
            <FrontLink title="experience"/>
          </div>
        </div>
      </div>
    </div>
)

export default Index
