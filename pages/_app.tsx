import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/style.scss";

import { useEffect, useState } from "react";
import DotProLogo from "../components/DotProLogo";

const DotPro = ({ Component, pageProps }: AppProps) => {
  const [showLogo, setShowLogo] = useState<boolean>(false);
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  // Show initial animation if website has not been visited before during this session
  useEffect(() => {
    if (sessionStorage.getItem("visited")) {
      setFadeIn(true);
    } else {
      // Show the logo, mark page as visited
      sessionStorage.setItem("visited", "true");
      setShowLogo(true);

      // Hide the logo after n ms and fade in other content  instead
      setTimeout(() => {
        setShowLogo(false);
        setFadeIn(true);
      }, 2800);
    }
  }, []);

  return (
    <>
      <div className={fadeIn ? "animated" : undefined}>
        <Component {...pageProps} />
      </div>
      {showLogo && (
        <div className={"dotProLogoContainer"}>
          <DotProLogo />
        </div>
      )}
    </>
  );
};

export default DotPro;
