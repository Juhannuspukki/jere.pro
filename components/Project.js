import Link from 'next/link'

const Project = (props) => (
  <div className={"row"}>
    <div className={"col-md-4"}>
      <img className={"projectIcon"} src={"/static/img/" + props.image + ".svg"}/>
      <h2 className={"projectTitle"}>{props.title}</h2>
    </div>
    <div className={"col-md-8 projectList"}>
      <div>
      {props.projectList.map((project) => (
          <Link href={"/#links"} key={project}>
            <a>{project}</a>
          </Link>
      ))}
      </div>
    </div>
  </div>
)

export default Project
