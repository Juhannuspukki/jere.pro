import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import IamGroot from "../../components/experiencetree/IamGroot";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { ParentSize } from "@visx/responsive";

const Index = () => {
  // crap to prevent SSR
  const [showChild, setShowChild] = useState<boolean>(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  // end of crap to prevent SSR

  return (
    <div>
      <Head>
        <title>jere.pro - Experience</title>
        <meta property="og:title" content="jere.pro - Experience" />
        <meta
          property="og:description"
          content="Yo, my name is Jere, and I design stuff. Read about the stuff I have done on this page."
        />
        <meta
          name="description"
          content="Yo, my name is Jere, and I design stuff. Read about the stuff I have done on this page."
        />
      </Head>
      <NavBar url={"/"} />
      <main className={"timeLineContainer animated"}>
        <h1>Experience</h1>
        <ParentSize>{(parent) => <IamGroot width={parent.width} />}</ParentSize>
      </main>
      <Footer url={"/"} />
    </div>
  );
};

export default Index;
