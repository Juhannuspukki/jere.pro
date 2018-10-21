import Link from 'next/link'

const Project = (props) => (
  <div className={"row"}>
    <div className={"col-md-2"} />
    <div className={"col-md-4"}>
      <img className={"projectIcon"} src={"/static/img/" + props.image + ".svg"}/>
      <h2 className={"projectTitle"}>{props.title}</h2>
    </div>
    <div className={"col-md-6 projectList"}>
      <div>
      {props.projectList.map((project) => (
          <Link href={`/project?title=${project.name}`} key={project}>
            <a>{project.name}</a>
          </Link>
      ))}
      </div>
    </div>
  </div>
)

export default Project
