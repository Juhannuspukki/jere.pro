import React from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import BigLinkButton from "../../components/BigLinkButton";
import { Svg } from "react-optimized-image";

import UiDesign from "../../svg/projects/uidesign.svg";
import Backend from "../../svg/projects/backend.svg";
import Frontend from "../../svg/projects/frontend.svg";
import DesktopAndMobile from "../../svg/projects/desktopmobile.svg";
import DevOps from "../../svg/projects/devops.svg";
import Embedded from "../../svg/projects/embedded.svg";

const menu = [
  {
    title: "UI/UX design",
    link: "/skills/design",
    icon: <Svg src={UiDesign} />,
  },
  {
    title: "Web",
    link: "/skills/web",
    icon: <Svg src={Frontend} />,
  },
  {
    title: "Native Apps",
    link: "/skills/native",
    icon: <Svg src={DesktopAndMobile} />,
  },
  {
    title: "DevOps",
    link: "/skills/devops",
    icon: <Svg src={DevOps} />,
  },
  {
    title: "Backend",
    link: "/skills/backend",
    icon: <Svg src={Backend} />,
  },
  {
    title: "Embedded",
    link: "/skills/embedded",
    icon: <Svg src={Embedded} />,
  },
];

const Index = () => (
  <div className={"indexContainer"}>
    <Head>
      <title>jere.pro - Projects</title>
      <meta property="og:title" content="jere.pro - Projects" />
      <meta
        property="og:description"
        content="Yo, my name is Jere, and I design stuff. Read about my more or less awesome projects here!"
      />
      <meta
        name="description"
        content="Yo, my name is Jere, and I design stuff. Read about my more or less awesome projects here!"
      />
    </Head>
    <NavBar url={"/"} />
    <div className={"container menuContainer animated"}>
      <h1>Projects</h1>
      <div className={"row no-gutters"}>
        {menu.map((button) => (
          <BigLinkButton
            key={button.title}
            title={button.title}
            link={button.link}
            collapseOnMedium={true}
          >
            {button.icon}
          </BigLinkButton>
        ))}
      </div>
    </div>
    <Footer url={"/"} />
  </div>
);

export default Index;
