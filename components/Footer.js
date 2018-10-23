import Arrow from '../svg/arrow-left.svg'
import Phone from '../svg/phone.svg'
import Sms from '../svg/sms.svg'
import Telegram from '../svg/about/tg.svg'
import Router from 'next/router'

const Footer = () => (
  <div className={"footer"}>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-3 footerLinkContainer"}>
          <div onClick={() => Router.back()} className={"footerLink"}><Arrow className={"footerLinkVector"}/></div>
        </div>
        <div className={"col-3 footerLinkContainer"}>
          <a href={"https://t.me/juhannuspukki"} target="_blank" className={"footerLink"}><Telegram className={"footerLinkVector"}/></a>
        </div>
        <div className={"col-3 footerLinkContainer"}>
          <a href={"sms:+358458664303"} className={"footerLink"}><Sms className={"footerLinkVector"}/></a>
        </div>
        <div className={"col-3 footerLinkContainer"}>
          <a href={"tel:+358458664303"} className={"footerLink"}><Phone className={"footerLinkVector"}/></a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer