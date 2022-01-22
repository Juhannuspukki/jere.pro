import React, { useState, useRef, useLayoutEffect } from "react";
import { Group } from "@visx/group";
import ExperienceBlock from "./ExperienceBlock";
import MapLines from "./ExperienceLines";

// colors
const primary = "#fff";
const contrast = "#000";

const startingPoint = (width, source) => {
  switch (source) {
    case "work":
      return width > 576 ? 10 : 320;
    case "education":
      return width > 576 ? 300 : 2200;
    case "private":
      return 0;
  }
};

const Graph = ({ width, height, margin, data }) => {
  const filterData = (d) =>
    d.reduce((accumulator, currentValue) => {
      if (width > 576) {
        accumulator.push({
          ...currentValue,
          xPosition: currentValue.position.medium.x,
        });
      } else {
        accumulator.push({
          ...currentValue,
          xPosition: currentValue.position.small.x,
        });
      }
      return accumulator;
    }, []);

  const responsiveData = [];

  data.forEach((i) => responsiveData.push(filterData(i)));

  let xRight = 0;
  let xLeft = 0;
  let textWidth = 0;

  if (width > 576) {
    xRight = width / 2 - margin.left + 15;
    xLeft = width / 2 - margin.right - 15;
    textWidth = width / 2 - 60 < 325 ? width / 2 - 60 : 325;
  } else {
    textWidth = 220;
    xRight = (width - textWidth - 60) / 2 + 30;
    xLeft = (width - textWidth - 60) / 2;
  }

  // positions
  const x = (d) => (d.xPosition === "left" ? xLeft : xRight);
  const xText = (d) => (d.xPosition === "left" ? xLeft - 25 : xRight + 25);
  // update scale range to match bounds

  const mapDots = (dataPoints, source) => {
    const boxHeights = [];

    return dataPoints.map((d, i) => {
      const xPosition = x(d);
      const xTextPosition = xText(d);
      const [yPosition, setYPosition] = useState(0);
      const [height, setHeight] = useState(0);

      // reference to the box of text that changes its height when viewport is resized
      const ref = useRef(null);

      // connectors only create bends without dots
      if (d.title === "Connector") {
        return;
      }

      // automatic resizing
      useLayoutEffect(() => {
        // measure height, add a constant to it and  then insert it to an array
        const descriptionHeight = ref.current?.getBBox().height;
        boxHeights[i] = descriptionHeight + (d.certificate ? 175 : 125);

        // to get a proper y-coordinate for this box, sum elements in array together with the determined starting point
        const position =
          startingPoint(width, source) +
          [...boxHeights].splice(0, i).reduce((a, b) => a + b, 0);

        setYPosition(position);
        setHeight(descriptionHeight);

        /*
        console.log(
          `index ${i}: ${d.title} - yPosition : ${yPosition} - height : ${descriptionHeight}`
        ); */
      });

      return (
        <ExperienceBlock
          key={`line-point-${source}-${i}`}
          xPosition={xPosition}
          yPosition={yPosition}
          xTextPosition={xTextPosition}
          descriptionHeight={height}
          textWidth={textWidth}
          timeFrame={d.timeFrame}
          title={d.title}
          subtitle={d.subtitle}
          description={d.description}
          certificate={d.certificate}
          textPlacement={d.xPosition}
          contrast={contrast}
          primary={primary}
          ref={ref}
        />
      );
    });
  };

  const workBoxRef = useRef(null);
  const privateBoxRef = useRef(null);

  return (
    <svg width={width} height={height + 100} className={"experienceGraph"}>
      <Group top={margin.top + 100} left={margin.left}>
        <MapLines
          source={"private"}
          x={x}
          height={height}
          width={width}
          startingPoint={startingPoint}
          workBoxRef={workBoxRef}
          privateBoxRef={privateBoxRef}
          primary={primary}
        />
        <MapLines
          source={"education"}
          x={x}
          height={height}
          width={width}
          startingPoint={startingPoint}
          workBoxRef={workBoxRef}
          privateBoxRef={privateBoxRef}
          primary={primary}
        />
        <MapLines
          source={"work"}
          x={x}
          height={height}
          width={width}
          startingPoint={startingPoint}
          workBoxRef={workBoxRef}
          privateBoxRef={privateBoxRef}
          primary={primary}
        />
        <g ref={privateBoxRef}>{mapDots(responsiveData[2], "private")}</g>
        {mapDots(responsiveData[1], "education")}
        <g ref={workBoxRef}>{mapDots(responsiveData[0], "work")}</g>
      </Group>
    </svg>
  );
};

export default Graph;
