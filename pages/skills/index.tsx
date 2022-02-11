import React from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import BigLinkButton from "../../components/BigLinkButton";

import UiDesign from "../../svg/projects/uidesign.svg";
import Backend from "../../svg/projects/backend.svg";
import Frontend from "../../svg/projects/frontend.svg";
import DesktopAndMobile from "../../svg/projects/desktopmobile.svg";
import CICD from "../../svg/projects/ci-cd.svg";
import Embedded from "../../svg/projects/embedded.svg";

const Index = () => (
  <div className={"indexContainer animated"}>
    <Head>
      <title>jere.pro - Skills</title>
      <meta property="og:title" content="jere.pro - Skills" />
      <meta
        property="og:description"
        content="My name is Jere, and I design stuff. Here are some things I have experience with."
      />
      <meta
        name="description"
        content="My name is Jere, and I design stuff. Here are some things I have experience with."
      />
    </Head>
    <NavBar url={"/"} />
    <main className={"skills"}>
      <div className={"menuGrid"}>
        <h1>Skills</h1>
        <div className={"innerMenuGrid"}>
          {menu.map((button) => (
            <BigLinkButton
              key={button.title}
              title={button.title}
              link={button.link}
            >
              {button.icon}
            </BigLinkButton>
          ))}
        </div>
      </div>
    </main>
    <Footer url={"/"} />
  </div>
);

const menu = [
  {
    title: "UI/UX design",
    link: "/skills/design",
    icon: <UiDesign />,
  },
  {
    title: "Web",
    link: "/skills/web",
    icon: <Frontend />,
  },
  {
    title: "Native Apps",
    link: "/skills/native",
    icon: <DesktopAndMobile />,
  },
  {
    title: "CI/CD",
    link: "/skills/ci-cd",
    icon: <CICD />,
  },
  {
    title: "Backend",
    link: "/skills/backend",
    icon: <Backend />,
  },
  {
    title: "Embedded",
    link: "/skills/embedded",
    icon: <Embedded />,
  },
];

export default Index;
