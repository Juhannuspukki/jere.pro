import Head from "next/head";
import Footer from "../components/Footer";
import BigLinkButton from "../components/BigLinkButton";

import Project from "../svg/projects.svg";
import Experience from "../svg/experience.svg";
import About from "../svg/about.svg";
import Skills from "../svg/skills.svg";
import Projects from "./projects";

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
    <main className={"index"}>
      <div className={"menuGrid"}>
        <h1>Menu</h1>
        <div className={"innerMenuGrid"}>
          <BigLinkButton title={"About"} link={"/about"}>
            <About />
          </BigLinkButton>
          <BigLinkButton title={"Experience"} link={"/experience"}>
            <Experience />
          </BigLinkButton>
          <BigLinkButton title={"Projects"} link={"/projects"}>
            <Project />
          </BigLinkButton>
          <BigLinkButton title={"Skills"} link={"/skills"}>
            <Skills />
          </BigLinkButton>
        </div>
      </div>
    </main>
    <Footer url={""} />
  </>
);

export default Home;
