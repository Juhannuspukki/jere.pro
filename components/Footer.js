import Arrow from '../svg/arrow-left.svg'
import Sms from '../svg/sms.svg'
import Telegram from '../svg/about/tg.svg'
import Mail from '../svg/about/mail.svg'
import React from 'react'
import Link from "next/link";

const Footer = (props) => (
  <div className={"footer"}>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-3 footerLinkContainer"}>
          <Link prefetch href={props.url}>
            <a className={"footerLink"}>
              <Arrow className={"footerLinkVector"}/>
            </a>
          </Link>
        </div>
        <div className={"col-3 footerLinkContainer"}>
          <a href={"https://t.me/juhannuspukki"} target="_blank" className={"footerLink"}><Telegram className={"footerLinkVector"}/></a>
        </div>
        <div className={"col-3 footerLinkContainer"}>
          <a href={"sms:+358458664303"} className={"footerLink"}><Sms className={"footerLinkVector"}/></a>
        </div>
        <div className={"col-3 footerLinkContainer"}>
          <a href={"mailto:jere@jere.pro"} className={"footerLink"}><Mail className={"footerLinkVector"}/></a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
