import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import PieHole from '../components/PieHole'
import Telegram from '../svg/about/tg.svg'
import GitHub from '../svg/about/git.svg'
import Mail from '../svg/about/mail.svg'
import LinkedIn from '../svg/about/in.svg'
import Me from '../static/img/me.jpeg'
import Head from 'next/head'
import React from 'react'
import {ParentSize} from "@vx/responsive";
import Phone from "../svg/phone.svg";

const msPerYear = 365*24*60*60*1000;
const dateOfBirth = new Date("1996-03-15");
const myAge = Math.floor((Date.now() - dateOfBirth)/msPerYear);
const languages = [
      {language: "Finnish", proficiency: 100},
      {language: "English", proficiency: 95},
      {language: "Swedish", proficiency: 40},
      {language: "Valyrian", proficiency: 30},];

const Index = () => (
  <div>
    <Head>
      <title>jere.pro - About me</title>
      <meta property="og:title" content="jere.pro - About me" />
    </Head>
    <NavBar url={"/"}/>
    <div className={"about animated"}>
      <div className={"container"}>
        <img className={"parsta"} src={Me} alt={"me in San Francisco"}/>
        <h1>Jere Laine</h1>
        <div className={"linkLogoContainer"}>
          <a
            className={"link"}
            aria-label={"Call me"}
            href={"tel:+358458664303"}
          >
            <Phone className={"linkLogo"}/>
          </a>
          <a
            className={"link"}
            aria-label={"Send an email"}
            href={"mailto:jere@jere.pro"}
          >
            <Mail className={"linkLogo"}/>
          </a>
          <a
            className={"link"}
            href={"https://t.me/juhannuspukki"}
            aria-label={"Contact on Telegram"}
            target="_blank"
          >
            <Telegram className={"linkLogo"}/>
          </a>
          <a
            className={"link"}
            href={"https://www.linkedin.com/in/jjlaine/"}
            aria-label={"LinkedIn profile"}
            target="_blank"
          >
            <LinkedIn className={"linkLogo"}/>
          </a>
          <a
            className={"link"}
            href={"https://github.com/Juhannuspukki"}
            aria-label={"GitHub profile"}
            target="_blank"
          >
            <GitHub className={"linkLogo"}/>
          </a>
        </div>
        <h2>About me</h2>
        <p>
          I’m a {myAge}-year-old Apple fanboy from Hervanta. I consider myself to be introverted, but I believe
          I have become more ambiverted over the years. I have quite many hobbies, including aquariums,
          debating, cooking, motion graphics, still graphics, coding apps in Swift, bots in Python and websites
          in many technologies. I occasionally try some embedded project as well. I like coding because
          it allows me to create anything I can imagine and boy, I can imagine a lot! Also, nothing beats the
          feeling you get when you try something new, overcome a difficult challenge for the first time and
          learn something in the process… except an apache helicopter. An apache helicopter is armed with machine
          guns and missiles; it’s an absolute death machine!
        </p>
        <div className="row">
          <div className="col-md-6">
            <h3>Awards and accolades</h3>
            <ul className="aboutList">
              <li>
                4th place, municipal math contest -09
              </li>
              <li>
                3rd place, schoolʼs math contest -11
              </li>
              <li>
                Scholarship from Teknologiateollisuus -11
              </li>
              <li>
                Apple pie has received excellent reviews
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Positions of trust</h3>
            <ul className="aboutList">
              <li>
                Treasurer, space tech club Castor -17, -18
              </li>
              <li>
                Frontend guy, space tech club Castor -19
              </li>
              <li>
                Treasurer, biomeditech club Pollex -18
              </li>
              <li>
                Chief designer, Tampere Debate Society -19
              </li>
            </ul>
          </div>
        </div>
        <h3>Language skills</h3>
        <div className="row">
          {languages.map(language => (
            <div className="col-3" key={language.language}>
              <ParentSize>
                {parent => (
                  <PieHole
                    data={language}
                    width={parent.width}
                    height={150}
                    parentTop={parent.top}
                    parentLeft={parent.left}
                    parentRef={parent.ref}
                    resizeParent={parent.resize}
                    margin={{top: 0, left: 0, right: 0, bottom: 0}}
                  />
                )}
              </ParentSize>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer url={"/"}/>
  </div>
)

export default Index
