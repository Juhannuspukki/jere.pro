import React from "react";
import Me from "../../public/img/me.jpeg";
import Head from "next/head";
import { Svg, Img } from "react-optimized-image";
import { ParentSize } from "@vx/responsive";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PieHole from "../../components/PieHole";
import Telegram from "../../svg/about/tg.svg";
import GitHub from "../../svg/about/git.svg";
import Mail from "../../svg/about/mail.svg";
import LinkedIn from "../../svg/about/in.svg";
import Phone from "../../svg/phone.svg";

const languages = [
  { language: "Finnish", proficiency: 100 },
  { language: "English", proficiency: 95 },
  { language: "Swedish", proficiency: 40 },
  { language: "Valyrian", proficiency: 20 },
  { language: "Thai", proficiency: 20 },
  { language: "German", proficiency: 15 },
  { language: "Spanish", proficiency: 15 },
  { language: "Japanese", proficiency: 10 },
];

const Index = () => (
  <div>
    <Head>
      <title>jere.pro - About me</title>
      <meta property="og:title" content="jere.pro - About me" />
      <meta
        property="og:description"
        content="Yo, my name is Jere, and I design stuff. Read about me on this page."
      />
      <meta
        name="description"
        content="Yo, my name is Jere, and I design stuff. Read about me on this page."
      />
    </Head>
    <NavBar url={"/"} />
    <div className={"about animated"}>
      <div className={"container"}>
        <Img className={"parsta"} src={Me} alt={"Me in San Francisco"} webp />
        <h1>Jere Laine</h1>
        <div className={"linkLogoContainer"}>
          <a aria-label={"Call me"} href={"tel:+358458664303"}>
            <Svg src={Phone} className={"chameleon highLightOnHover"} />
          </a>
          <a aria-label={"Send an email"} href={"mailto:jere@jere.pro"}>
            <Svg src={Mail} className={"chameleon highLightOnHover"} />
          </a>
          <a
            href={"https://t.me/juhannuspukki"}
            aria-label={"Contact on Telegram"}
            target="_blank"
          >
            <Svg src={Telegram} className={"chameleon highLightOnHover"} />
          </a>
          <a
            href={"https://www.linkedin.com/in/jjlaine/"}
            aria-label={"LinkedIn profile"}
            target="_blank"
          >
            <Svg src={LinkedIn} className={"chameleon highLightOnHover"} />
          </a>
          <a
            href={"https://github.com/Juhannuspukki"}
            aria-label={"GitHub profile"}
            target="_blank"
          >
            <Svg src={GitHub} className={"chameleon highLightOnHover"} />
          </a>
        </div>
        <h2>About me</h2>
        <p>
          Hello, and welcome to my site. I am a university student from
          Hervanta, Finland who likes to tinker with software. I consider myself
          to be introverted, but I believe I have become more ambiverted over
          the years. I have quite many hobbies, including aquariums, debating,
          cooking, motion graphics, still graphics, coding bots in Python and
          websites with many technologies. I occasionally try my hand on an
          embedded project as well. I like programming because it allows me to
          create anything I can imagine and boy, I can imagine a lot! Also,
          nothing beats the feeling you get when you try something new, overcome
          a difficult challenge for the first time and learn something in the
          process… except an apache helicopter. An apache helicopter is armed
          with machine guns and missiles; it’s an absolute death machine!
        </p>
        <div className="row">
          <div className="col-md-6">
            <h3>Awards and accolades</h3>
            <ul className="aboutList">
              <li>4th place, municipal math contest -09</li>
              <li>3rd place, schoolʼs math contest -11</li>
              <li>Scholarship from Teknologiateollisuus -11</li>
              <li>Apple pie has received excellent reviews</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Positions of trust</h3>
            <ul className="aboutList">
              <li>Treasurer, space tech club Castor -17, -18</li>
              <li>Frontend guy, space tech club Castor -19</li>
              <li>Treasurer, biomeditech club Pollex -18</li>
              <li>Chief designer, Tampere Debate Society -19</li>
              <li>Member of Mensa Finland since -13</li>
            </ul>
          </div>
        </div>
        <h3>Language skills</h3>
        <div className="row">
          {languages.map((language) => (
            <div className="col-3" key={language.language}>
              <ParentSize>
                {(parent) => (
                  <PieHole
                    data={language}
                    width={parent.width}
                    height={150}
                    parentTop={parent.top}
                    parentLeft={parent.left}
                    parentRef={parent.ref}
                    resizeParent={parent.resize}
                    margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  />
                )}
              </ParentSize>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer url={"/"} />
  </div>
);

export default Index;
