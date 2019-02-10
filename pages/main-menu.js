import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import FrontLink from '../components/FrontLinks'
import Project from '../svg/projects.svg'
import Experience from '../svg/experience.svg'
import About from '../svg/about.svg'
import Head from 'next/head'

const Index = () => (
  <div className={"test"}>
    <Head>
      <title>jere.pro - Main menu</title>
      <meta property="og:title" content="jere.pro - Main menu" />
    </Head>
    <div className={"container mainMenuContainer animated"}>
      <div className={"row"}>
        <FrontLink title={"about"}><About className={"vectorLink"}/></FrontLink>
        <FrontLink title={"projects"}><Project className={"vectorLink"}/></FrontLink>
        <FrontLink title={"experience"}><Experience className={"vectorLink"}/></FrontLink>
      </div>
    </div>
    <Footer/>
  </div>
)

export default Index
