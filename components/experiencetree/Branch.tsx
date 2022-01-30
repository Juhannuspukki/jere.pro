import React from "react";
import Leaf from "./Leaf";
import Twig from "./Twig";
import { Data, BranchId, ReferenceHeights } from "./IamGroot";

interface BranchProps {
  data: Data;
  setReferenceHeight: (id: BranchId, referenceHeight: number) => void;
  referenceHeights: ReferenceHeights;
  width: number;
  height: number;
}

// colors
const primary = "#fff";
const contrast = "#000";

const Branch: React.FC<BranchProps> = (props) => {
  const { data, setReferenceHeight, referenceHeights, width, height } = props;

  const boxHeights: number[] = [];

  const updateBoxHeights = (boxHeight: number, i: number) => {
    boxHeights[i] = boxHeight;
    setReferenceHeight(
      data.branchID,
      [...boxHeights].reduce((a, b) => a + b, 0)
    );
  };

  const foliagePosition = (): number => {
    // big screen
    if (width > 576)
      return data.branchSide === "left" ? (-1 * width) / 2 : width / 2;
    // small screen
    else return width / 2 - 115;
  };

  return (
    <>
      <Twig
        id={data.branchID}
        width={width}
        height={height}
        referenceHeights={referenceHeights}
        startingPoint={startingPoint(width, data.branchID, referenceHeights)}
        primary={primary}
      />
      {/* For some reason point of origin is at the center*/}
      <svg
        width={width}
        height={height - startingPoint(width, data.branchID, referenceHeights)}
        x={foliagePosition()}
        y={startingPoint(width, data.branchID, referenceHeights)}
      >
        {data.leaves.map((d, i) => (
          <Leaf
            key={`line-point-${data.branchID}-${d.timeFrame}`}
            data={d}
            index={i}
            width={width}
            side={data.branchSide}
            boxHeights={boxHeights}
            updateBoxHeights={updateBoxHeights}
            contrast={contrast}
            primary={primary}
          />
        ))}
      </svg>
    </>
  );
};

const startingPoint = (
  width: number,
  source: BranchId,
  referenceHeights: ReferenceHeights
): number => {
  switch (source) {
    case "entrepreneurship":
      return 0;
    case "employment":
      return width > 576 ? 10 : referenceHeights.entrepreneurship + 20;
    case "education":
      return width > 576
        ? referenceHeights.entrepreneurship + 20
        : referenceHeights.entrepreneurship + referenceHeights.employment + 60;
  }
};

export default Branch;
