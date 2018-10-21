import Header from '../components/Header'

const Index = () => (
  <div>
    <Header />
    <div className={"timeLineContainer"}>
      <img className={"smallTimeLine"} src={"/static/img/timeline-s.svg"}/>
      <img className={"largeTimeLine"} src={"/static/img/timeline-l.svg"}/>
      <img className={"mediumTimeLine"} src={"/static/img/timeline-m.svg"}/>
      <img className={"extraSmallTimeLine"} src={"/static/img/timeline-xs.svg"}/>
    </div>
  </div>
)

export default Index
