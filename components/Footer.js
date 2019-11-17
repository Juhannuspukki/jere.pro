import Arrow from '../svg/arrow-left.svg?sprite'
import Phone from '../svg/phone.svg?sprite'
import Telegram from '../svg/about/tg.svg?sprite'
import Mail from '../svg/about/mail.svg?sprite'
import React from 'react'
import Link from "next/link";

const Footer = (props) => (
  <div className={"footer"}>
    <div className={"container footerContainer"}>
      <div className={"row"}>
        <div className={"col-3 footerLinkContainer"}>
          <Link href={props.url}>
            <a className={props.url === "" ? "disabled footerLink" : "footerLink"} aria-label={"Previous page"}>
              <Arrow className={"footerLinkVector"}/>
            </a>
          </Link>
        </div>
        <div className={"col-3 footerLinkContainer"}>
          <a href={"https://t.me/juhannuspukki"}
             target="_blank"
             rel="noreferrer"
             className={"footerLink"}
             aria-label={"Message via Telegram"}>
            <Telegram className={"footerLinkVector"}/>
          </a>
        </div>
        <div className={"col-3 footerLinkContainer"}>
          <a href={"tel:+358458664303"}
             className={"footerLink"}
             aria-label={"Call me"}>
            <Phone className={"footerLinkVector"}/>
          </a>
        </div>
        <div className={"col-3 footerLinkContainer"}>
          <a href={"mailto:jere@jere.pro"}
             className={"footerLink"}
             aria-label={"Send an email"}>
            <Mail className={"footerLinkVector"}/>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
