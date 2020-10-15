import React, { useEffect, useState } from "react";

const StepList = (props) => {
  const { slug, steps } = props;

  const [strikeThroughList, setStrikeThroughList] = useState([]);

  const toggleLine = (line) => {
    // make an updated list of strikethrough text
    const newList = strikeThroughList.includes(line)
      ? strikeThroughList.filter((item) => item !== line)
      : [...strikeThroughList, line];

    // set it as state && save to localstorage
    setStrikeThroughList(newList);
    sessionStorage.setItem(slug, JSON.stringify(newList));
  };

  useEffect(() => {
    // run on pageload and look for saved session data
    if (sessionStorage.getItem(slug)) {
      // if found, set is as state
      setStrikeThroughList(JSON.parse(sessionStorage.getItem(slug)));
    }
  }, []);

  return (
    <>
      {steps.map((step, index) => (
        <li
          key={step + index}
          className={
            strikeThroughList.includes(step + index)
              ? "line-through"
              : undefined
          }
          onClick={() => toggleLine(step + index)}
        >
          {step}
        </li>
      ))}
    </>
  );
};

export default StepList;
