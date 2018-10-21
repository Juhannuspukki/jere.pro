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
          [
            {
              name: "jere.pro",
              link: "/dotpro"
            },
            {
              name: "tamperedebatesociety.fi",
              link:"/tds"
            },
            {
              name: "Bachelor's thesis",
              link: "https://jere.pro"
            }
          ]
        },
      {
        title: "Frontend",
        image: "frontend",
        projectList:
          [
            {
              name: "neuroeventlabs.com",
              link: "/nel"
            },
            {
              name: "tamperedebatesociety.fi",
              link: "/tds"
            },
            {
              name: "muistola.fi",
              link: "/muistola"
            }
          ]
      },
      {
        title: "Backend",
        image: "backend",
        projectList:
          [
            {
              name: "@LogosTheBot on Telegram",
              link: "/logos"
            },
          ]
      },
      {
        title: "Embedded",
        image: "embedded",
        projectList:
          [
            {
              name: "4D QR code",
              link: "/qr"
            },
            {
              name: "FFT audio LED",
              link: "/led"
            },
          ]
      }
    ]

  return {
    projects: data
  }
}


export default Index
