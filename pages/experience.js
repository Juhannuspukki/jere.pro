import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ExtraSmallTimeLine from '../svg/experience/timeline-xs.svg'
import SmallTimeLine from '../svg/experience/timeline-s.svg'
import MediumTimeLine from '../svg/experience/timeline-m.svg'
import LargeTimeLine from '../svg/experience/timeline-l.svg'
import Head from 'next/head'

const Index = () => (
  <div>
    <Head>
      <title>jere.pro - Experience</title>
      <meta property="og:title" content="jere.pro - Experience" />
    </Head>
    <NavBar/>
    <div className={"timeLineContainer"}>
      <ExtraSmallTimeLine className={"extraSmallTimeLine"}/>
      <SmallTimeLine className={"smallTimeLine"}/>
      <MediumTimeLine className={"mediumTimeLine"}/>
      <LargeTimeLine className={"largeTimeLine"}/>
    </div>
    <Footer/>
  </div>
)

export default Index
