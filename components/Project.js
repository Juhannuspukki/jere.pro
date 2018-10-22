import Link from 'next/link'


const Project = (props) => (
  <div className={"row"}>
    <div className={"col-md-2"} />
    <div className={"col-md-4 projectLinkContainer"}>
      {props.children}
      <h2 className={"projectTitle"}>{props.title}</h2>
    </div>
    <div className={"col-md-6 projectList"}>
      <div>
      {props.projectList.map((project) => (
          <Link prefetch as={`/projects/${project.link}`} href={`/post?title=${project.name}&description=${project.description}&image=${project.link}&external=${project.external}`} key={project}>
            <a>{project.name}</a>
          </Link>
      ))}
      </div>
    </div>
  </div>
)

export default Project
