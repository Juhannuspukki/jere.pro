import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Project from '../components/Project'
import ProjectObject from '../components/ProjectObject'

const Index = (props) => (
  <div className={"test"}>
    <NavBar/>
    <div className={"container projectContainer"}>
      {ProjectObject.projects.map((project) => (
        <Project key={project.title} title={project.title} projectList={project.projectList}>
          {project.image}
        </Project>
      ))}
    </div>
    <Footer/>
  </div>
)

export default Index
