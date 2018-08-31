import Header from '../components/Header'
import Project from '../components/Project'

const Index = (props) => (
  <div>
    <Header />
    <div className={"container projectContainer"}>
      {props.projects.map((project) => (
              <Project key={project.title}
                    title={project.title}
                    image={project.image}
                    projectList={project.projectList}

              />
      ))}
    </div>
  </div>
)

Index.getInitialProps = async function() {
  const data =
    [
      {
        title: "UI/UX design",
        image: "uidesign",
        projectList:
            ["jere.pro", "tamperedebatesociety.fi", "Bachelor's thesis"]
      },
      {
        title: "Frontend",
        image: "frontend",
        projectList:
            ["neuroeventlabs.com", "tamperedebatesociety.fi", "muistola.fi"]
      }
    ]

  return {
    projects: data
  }
}


export default Index
