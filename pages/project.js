import {withRouter} from 'next/router'
import Header from '../components/Header'

const Page = withRouter((props) => (
  <div>
      <Header/>
      <h2>{props.router.query.title}</h2>
  </div>
))

export default Page