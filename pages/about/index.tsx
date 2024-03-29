import React from "react";
import Head from "next/head";
import Image from "next/image";
import { ParentSize } from "@visx/responsive";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PieHole from "../../components/PieHole";

import Me from "../../public/img/me.jpeg";
import Telegram from "../../svg/about/tg.svg";
import GitHub from "../../svg/about/git.svg";
import Mail from "../../svg/about/mail.svg";
import LinkedIn from "../../svg/about/in.svg";
import Phone from "../../svg/phone.svg";

const Index = () => (
  <>
    <Head>
      <title>jere.pro - About me</title>
      <meta property="og:title" content="jere.pro - About me" />
      <meta
        property="og:description"
        content="My name is Jere, and I design stuff. Read about me on this page."
      />
      <meta
        name="description"
        content="My name is Jere, and I design stuff. Read about me on this page."
      />
    </Head>
    <NavBar url={"/"} />
    <main className={"about animated"}>
      <div className={"container"}>
        <Image
          className={"parsta"}
          src={Me}
          alt={"Me in San Francisco"}
          width={768}
          height={432}
          priority
        />
        <h1>Jere Laine</h1>
        <h2 className={"education"}>Master of Science (Tech.)</h2>
        <div className={"linkLogoContainer"}>
          <a aria-label={"Call me"} href={"tel:+358458664303"}>
            <Phone className={"chameleon highLightOnHover"} />
          </a>
          <a aria-label={"Send an email"} href={"mailto:jere@jere.pro"}>
            <Mail className={"chameleon highLightOnHover"} />
          </a>
          <a
            href={"https://t.me/juhannuspukki"}
            aria-label={"Contact on Telegram"}
            target="_blank"
            rel="noreferrer"
          >
            <Telegram className={"chameleon highLightOnHover"} />
          </a>
          <a
            href={"https://www.linkedin.com/in/jjlaine/"}
            aria-label={"LinkedIn profile"}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className={"chameleon highLightOnHover"} />
          </a>
          <a
            href={"https://github.com/Juhannuspukki"}
            aria-label={"GitHub profile"}
            target="_blank"
            rel="noreferrer"
          >
            <GitHub className={"chameleon highLightOnHover"} />
          </a>
        </div>
        <h2>About Me</h2>
        <p>
          Howdy folks! You are in the virtual presence of me: a master of
          science (technology), privacy advocate, most astute apple pie baker,
          King of the Andals and the first men, Khal of the Great Grass Sea,
          holder of the Sacred Chalice of Rixx and the heir to the Holy Rings of
          Betazed. I am a man of many interests: over the years I have had
          hobbies such as aquariums, debating, cooking, motion graphics, still
          graphics, coding bots in Python, websites in React, and games in C#. I
          occasionally try my hand on an embedded project as well. I like
          programming because it allows me to create anything I can imagine and
          boy, I can imagine a lot! Also, nothing beats the feeling you get when
          you try something new, overcome a difficult challenge for the first
          time and learn something in the process… except an apache helicopter.
          An apache helicopter is armed with machine guns and missiles; it’s an
          absolute death machine!
        </p>
        <h2>Services</h2>
        <p>
          I am able to offer various services related to software development
          and user experience design through my own company, StaticCharge (VAT
          number 2869619-3). Should the skills and experience I have suit your
          needs, do not hesitate to contact me through any of the channels
          listed on this page.
        </p>
        <div className="row">
          <div className="col-md-6">
            <h3>Awards and Accolades</h3>
            <ul className="aboutList">
              <li>4th place, municipal math contest -09</li>
              <li>3rd place, schoolʼs math contest -11</li>
              <li>Scholarship from Teknologiateollisuus -11</li>
              <li>Apple pie has received excellent reviews</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Positions of Trust</h3>
            <ul className="aboutList">
              <li>Treasurer, space tech club Castor -17, -18</li>
              <li>Frontend guy, space tech club Castor -19</li>
              <li>Treasurer, biomeditech club Pollex -18</li>
              <li>Chief designer, Tre Debate Society -19</li>
              <li>Member of Mensa Finland since -13</li>
            </ul>
          </div>
        </div>
        <h3>Language Skills</h3>
        <div className="row">
          {languages.map((language) => (
            <div className="col-3" key={language.language}>
              <ParentSize>
                {(parent) => (
                  <PieHole
                    data={language}
                    width={parent.width}
                    height={150}
                    margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  />
                )}
              </ParentSize>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer url={"/"} />
  </>
);

const languages: { language: string; proficiency: number }[] = [
  { language: "Finnish", proficiency: 100 },
  { language: "English", proficiency: 95 },
  { language: "Swedish", proficiency: 40 },
  { language: "Valyrian", proficiency: 15 },
  { language: "Thai", proficiency: 20 },
  { language: "German", proficiency: 15 },
  { language: "Spanish", proficiency: 15 },
  { language: "Japanese", proficiency: 5 },
];

export default Index;
