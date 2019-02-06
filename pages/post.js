import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {withRouter} from 'next/router'
import Head from 'next/head'

const Index = withRouter((props) => (
  <div>
    <Head>
      <title>jere.pro - Projects - {props.router.query.title}</title>
      <meta property="og:title" content={"jere.pro - Projects - " + props.router.query.title} />
    </Head>
    <NavBar />
    <div className={"post"}>
      <div className={"container"}>
        <img className={"hero"} src={require("../static/img/" + props.router.query.image + ".jpeg")}/>
        <h1>{props.router.query.title}</h1>
        <p>
          {props.router.query.description}
        </p>
        {(props.router.query.external === "unavailable") ? <div /> :
          <a className={"postExternalLink"} href={props.router.query.external} target="_blank">Go to project →</a>
        }
      </div>
    </div>
    <Footer/>
  </div>
))

export default Index

