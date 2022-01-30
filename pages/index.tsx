import Head from "next/head";
import Footer from "../components/Footer";
import BigLinkButton from "../components/BigLinkButton";

import Project from "../svg/projects.svg";
import Experience from "../svg/experience.svg";
import About from "../svg/about.svg";

const Home = () => (
  <>
    <Head>
      <title>jere.pro</title>
      <meta property="og:title" content="jere.pro" />
      <meta
        property="og:description"
        content="My name is Jere, and I design stuff. Such as this website, for example. It's cool, check it out. Go on. Click. I dare you."
      />
      <meta
        name="description"
        content="My name is Jere, and I design stuff. Such as this website, for example. It's cool, check it out. Go on. Click. I dare you."
      />
      <meta property="og:url" content="https://jere.pro" />
    </Head>
    <main className={"indexContainer"}>
      <div className={"container menuContainer"}>
        <h1>Menu</h1>
        <div className={"row no-gutters"}>
          {menu.map((button) => (
            <BigLinkButton
              key={button.title}
              title={button.title}
              link={button.link}
              collapseOnMedium={false}
            >
              {button.icon}
            </BigLinkButton>
          ))}
        </div>
      </div>
    </main>
    <Footer url={""} />
  </>
);

const menu: { title: string; link: string; icon: JSX.Element }[] = [
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

export default Home;
