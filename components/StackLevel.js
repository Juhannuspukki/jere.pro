import Link from 'next/link'
import React from 'react'


const StackLevel = (props) => (
  <div className={"row stackLevel"}>
    <div className={"col-md-2"} />
    <div className={"col-md-4 projectLinkContainer"}>
      <Link href={`/skills/${props.link}`} key={props.link}>
        <a className={"frontLink"}>
          {props.children}
          <h2 className={"projectTitle"}>{props.title}</h2>
        </a>
      </Link>
    </div>
    <div className={"col-md-6 projectList"}>
      <div>
        {props.projectList.map((project) => (
          <Link href={`/projects/${project.link}`} key={project.link}>
            <a>{project.name} →</a>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default StackLevel
