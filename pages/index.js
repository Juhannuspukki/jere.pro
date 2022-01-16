import React, { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import BigLinkButton from "../components/BigLinkButton";
import DotProLogo from "../components/DotProLogo";

import Project from "../svg/projects.svg";
import Experience from "../svg/experience.svg";
import About from "../svg/about.svg";

const menu = [
  {
    title: "Projects",
    link: "/projects",
    icon: <Project />,
  },
  {
    title: "About",
    link: "/about",
    icon: <About />,
  },
  {
    title: "Experience",
    link: "/experience",
    icon: <Experience />,
  },
];

export default function Home() {
  const [showLogo, setShowLogo] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Show initial animation if page has not been visited before during this session

  useEffect(() => {
    if (sessionStorage.getItem("visited")) {
      setShowMenu(true);
    } else {
      // Mark page as visited and show the logo
      sessionStorage.setItem("visited", "true");
      setShowLogo(true);

      // Hide the logo after n ms and render menu instead
      setTimeout(() => {
        setShowLogo(false);
        setShowMenu(true);
      }, 2800);
    }
  }, []);

  return (
    <main className={"indexContainer"}>
      <Head>
        <title>jere.pro</title>
        <meta property="og:title" content="jere.pro" />
        <meta
          property="og:description"
          content="Yo, my name is Jere, and I design stuff. Such as this website, for example. It's cool, check it out. Go on. Click. I dare you."
        />
        <meta
          name="description"
          content="Yo, my name is Jere, and I design stuff. Such as this website, for example. It's cool, check it out. Go on. Click. I dare you."
        />
        <meta property="og:url" content="https://jere.pro" />
      </Head>
      {showLogo && (
        <div className={"dotProLogoContainer"}>
          <DotProLogo />
        </div>
      )}
      {showMenu && (
        <>
          <div className={"container menuContainer animated"}>
            <h1>Menu</h1>
            <div className={"row no-gutters"}>
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
          <Footer url={""} />
        </>
      )}
    </main>
  );
}
