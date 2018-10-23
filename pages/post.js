import NavBar from '../components/NavBar'
import {withRouter} from 'next/router'


const Index = withRouter((props) => (
  <div>
    <NavBar />
    <div className={"post"}>
      <div className={"container"}>
        <img className={"hero"} src={"/static/img/" + props.router.query.image + ".jpeg"}/>
        <h1>{props.router.query.title}</h1>
        <p>
          {props.router.query.description}
        </p>
        {(props.router.query.external === "unavailable") ? <div /> :
          <a className={"postExternalLink"} href={props.router.query.external} target="_blank">Go to project →</a>
        }
      </div>
    </div>
  </div>
))

export default Index

