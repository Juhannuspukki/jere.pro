import React, { useEffect, useState } from "react";

interface StepListProps {
  slug: string;
  steps: string[];
}

const StepList: React.FC<StepListProps> = (props) => {
  const { slug, steps } = props;

  const [strikeThroughList, setStrikeThroughList] = useState<string[]>([]);

  const toggleLine = (line: string) => {
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
    const savedStrikeThroughs = sessionStorage.getItem(slug);

    if (savedStrikeThroughs) {
      // if found, set it as state
      setStrikeThroughList(JSON.parse(savedStrikeThroughs));
    }
  }, [slug]);

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
