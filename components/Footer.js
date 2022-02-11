import React from "react";
import Link from "next/link";

import Arrow from "../svg/arrow-left.svg";
import Phone from "../svg/phone.svg";
import Telegram from "../svg/about/tg.svg";
import Mail from "../svg/about/mail.svg";

const Footer = (props) => (
  <footer className={"footer"}>
    <div className={"container footerContainer"}>
      <div className={"row no-gutters"}>
        <div className={"col-3 footerLinkContainer"}>
          <Link href={props.url}>
            <a
              className={
                props.url === "" ? "disabled footerLink" : "footerLink"
              }
              aria-label={"Previous page"}
            >
              <Arrow
                className={"footerLinkVector chameleon highLightOnHover"}
              />
            </a>
          </Link>
        </div>
        <div className={"col-3 footerLinkContainer"}>
          <a
            href={"https://t.me/juhannuspukki"}
            target="_blank"
            rel="noreferrer"
            className={"footerLink"}
            aria-label={"Message via Telegram"}
          >
            <Telegram
              className={"footerLinkVector chameleon highLightOnHover"}
            />
          </a>
        </div>
        <div className={"col-3 footerLinkContainer"}>
          <a
            href={"tel:+358458664303"}
            className={"footerLink"}
            aria-label={"Call me"}
          >
            <Phone className={"footerLinkVector chameleon highLightOnHover"} />
          </a>
        </div>
        <div className={"col-3 footerLinkContainer"}>
          <a
            href={"mailto:jere@jere.pro"}
            className={"footerLink"}
            aria-label={"Send an email"}
          >
            <Mail className={"footerLinkVector chameleon highLightOnHover"} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
