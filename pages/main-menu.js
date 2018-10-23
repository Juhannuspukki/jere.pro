import NavBar from '../components/NavBar'
import FrontLink from '../components/FrontLinks'
import Project from '../svg/projects.svg'
import Experience from '../svg/experience.svg'
import About from '../svg/about.svg'


const Index = () => (
  <div className={"test"}>
    <NavBar/>
    <div className={"container mainMenuContainer"}>
      <div className={"row"}>
        <FrontLink title={"about"}><About className={"vectorLink"}/></FrontLink>
        <FrontLink title={"projects"}><Project className={"vectorLink"}/></FrontLink>
        <FrontLink title={"experience"}><Experience className={"vectorLink"}/></FrontLink>
      </div>
    </div>
  </div>
)

export default Index