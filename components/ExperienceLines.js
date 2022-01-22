import { LinePath } from "@visx/shape";
import { curveMonotoneY } from "@visx/curve";
import React from "react";

const dataPoints = (
  source,
  width,
  height,
  startingPoint,
  privateBoxRef,
  workBoxRef
) => {
  if (width > 576) {
    if (source === "private") {
      return [
        { yPosition: startingPoint(width, source), xPosition: "left" },
        {
          yPosition: privateBoxRef.current?.getBBox().height,
          xPosition: "left",
        },
        {
          yPosition: privateBoxRef.current?.getBBox().height + 40,
          xPosition: "right",
        },
        {
          yPosition: privateBoxRef.current?.getBBox().height + 80,
          xPosition: "right",
        },
      ];
    }
    if (source === "work") {
      return [
        { yPosition: startingPoint(width, source), xPosition: "right" },
        { yPosition: workBoxRef.current?.getBBox().height, xPosition: "right" },
        {
          yPosition: workBoxRef.current?.getBBox().height + 40,
          xPosition: "left",
        },
        { yPosition: height, xPosition: "left" },
      ];
    }

    if (source === "education") {
      return [
        { yPosition: startingPoint(width, source), xPosition: "left" },
        { yPosition: height, xPosition: "left" },
      ];
    }
  } else {
    if (source === "private") {
      return [
        { yPosition: startingPoint(width, source), xPosition: "right" },
        {
          yPosition: privateBoxRef.current?.getBBox().height - 20,
          xPosition: "right",
        },
        {
          yPosition: privateBoxRef.current?.getBBox().height + 20,
          xPosition: "left",
        },
        {
          yPosition: height,
          xPosition: "left",
        },
      ];
    }

    if (source === "work") {
      return [
        { yPosition: startingPoint(width, source), xPosition: "right" },
        {
          yPosition: startingPoint(width, "education") - 80,
          xPosition: "right",
        },
        {
          yPosition: startingPoint(width, "education") - 40,
          xPosition: "left",
        },
        { yPosition: height, xPosition: "left" },
      ];
    }

    if (source === "education") {
      return [
        { yPosition: startingPoint(width, source), xPosition: "right" },
        { yPosition: height, xPosition: "right" },
      ];
    }
  }
};

const MapLines = (props) => {
  const {
    source,
    width,
    height,
    workBoxRef,
    privateBoxRef,
    x,
    primary,
    startingPoint,
  } = props;

  if (typeof privateBoxRef.current?.getBBox().height === "undefined") {
    return null;
  }

  const data = dataPoints(
    source,
    width,
    height,
    startingPoint,
    privateBoxRef,
    workBoxRef
  );

  return (
    <LinePath
      key={`line-${source}`}
      data={data}
      x={x}
      y={(value) => value.yPosition}
      stroke={primary}
      strokeWidth={5}
      curve={curveMonotoneY}
      style={{
        zIndex: -5,
      }}
    />
  );
};

export default MapLines;
