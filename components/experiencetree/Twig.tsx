import React from "react";
import { LinePath } from "@visx/shape";
import { curveMonotoneY } from "@visx/curve";
import { BranchId, ReferenceHeights } from "./IamGroot";

const marginTop: number = 100;

interface DataPoints {
  yPosition: number;
  xPosition: "right" | "left";
}

interface TwigProps {
  id: BranchId;
  width: number;
  height: number;
  referenceHeights: ReferenceHeights;
  startingPoint: number;
  primary: string;
}

const Twig: React.FC<TwigProps> = (props) => {
  const { id, width, height, referenceHeights, startingPoint, primary } = props;
  const twigPosition = (side: "left" | "right") => {
    // big screen
    if (width > 576) return (side === "left" ? -15 : 15) + width / 2;
    // small screen
    else return side === "left" ? width / 2 - 130 : width / 2 - 100;
  };

  const data = dataPoints(id, width, height, referenceHeights, startingPoint);

  return (
    <LinePath
      key={`line-${id}`}
      className={"twig"}
      data={data}
      x={(value) => twigPosition(value.xPosition)}
      y={(value) => value.yPosition}
      stroke={primary}
      strokeWidth={5}
      strokeDasharray="1500"
      curve={curveMonotoneY}
    />
  );
};

const dataPoints = (
  source: BranchId,
  width: number,
  height: number,
  referenceHeight: ReferenceHeights,
  startingPoint: number
): DataPoints[] => {
  if (width > 576) {
    if (source === "entrepreneurship") {
      return [
        { yPosition: startingPoint + marginTop, xPosition: "left" },
        {
          yPosition: referenceHeight.entrepreneurship + 40,
          xPosition: "left",
        },
        {
          yPosition: referenceHeight.entrepreneurship + 80,
          xPosition: "right",
        },
        {
          yPosition: referenceHeight.entrepreneurship + 120,
          xPosition: "right",
        },
      ];
    }
    if (source === "employment") {
      return [
        { yPosition: startingPoint + marginTop, xPosition: "right" },
        { yPosition: referenceHeight.employment + 80, xPosition: "right" },
        {
          yPosition: referenceHeight.employment + 120,
          xPosition: "left",
        },
        { yPosition: referenceHeight.employment + 160, xPosition: "left" },
      ];
    } /* education */ else {
      return [
        {
          yPosition: referenceHeight.entrepreneurship + 120,
          xPosition: "left",
        },
        { yPosition: height + marginTop, xPosition: "left" },
      ];
    }
  } else {
    if (source === "entrepreneurship") {
      return [
        { yPosition: startingPoint + marginTop, xPosition: "right" },
        {
          yPosition: referenceHeight.entrepreneurship + 40,
          xPosition: "right",
        },
        {
          yPosition: referenceHeight.entrepreneurship + 80,
          xPosition: "left",
        },
        { yPosition: height + marginTop, xPosition: "left" },
      ];
    }

    if (source === "employment") {
      return [
        { yPosition: startingPoint + marginTop, xPosition: "right" },
        {
          yPosition:
            referenceHeight.entrepreneurship + referenceHeight.employment + 80,
          xPosition: "right",
        },
        {
          yPosition:
            referenceHeight.entrepreneurship + referenceHeight.employment + 120,
          xPosition: "left",
        },
        {
          yPosition: height + marginTop,
          xPosition: "left",
        },
      ];
    } /* education */ else {
      return [
        { yPosition: startingPoint + marginTop, xPosition: "right" },
        { yPosition: height + marginTop, xPosition: "right" },
      ];
    }
  }
};

export default Twig;
