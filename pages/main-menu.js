import FrontLink from '../components/FrontLinks'

const Index = () => (
  <div className={"test"}>
    <div className={"container mainMenuContainer"}>
      <div className={"row"}>
        <FrontLink title={"about"}/>
        <FrontLink title={"projects"}/>
        <FrontLink title={"experience"}/>
      </div>
    </div>
  </div>
)

export default Index