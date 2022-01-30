import { useState } from "react";
import Branch from "./Branch";

import EducationData from "../../content/experience/education.json";
import EmploymentData from "../../content/experience/employment.json";
import EntrepreneurshipData from "../../content/experience/entrepreneurship.json";

interface GraphProps {
  width: number;
}

export interface Data {
  branchID: BranchId;
  branchSide: "right" | "left";
  leaves: [DataLeaf];
}

export type BranchId = "entrepreneurship" | "employment" | "education";

export interface DataLeaf {
  title: string;
  subtitle: string;
  description: string;
  timeFrame: string;
  certificate?: Certificate;
}

interface Certificate {
  title: string;
  downloadLink: string;
}

export interface ReferenceHeights {
  entrepreneurship: number;
  employment: number;
  education: number;
}

const Graph: React.FC<GraphProps> = ({ width }) => {
  const [referenceHeightEducation, setReferenceHeightEducation] =
    useState<number>(0);
  const [referenceHeightEntrepreneurship, setReferenceHeightEntrepreneurship] =
    useState<number>(0);
  const [referenceHeightEmployment, setReferenceHeightEmployment] =
    useState<number>(0);

  const setReferenceHeight = (id: BranchId, referenceHeight: number): void => {
    switch (id) {
      case "entrepreneurship":
        setReferenceHeightEntrepreneurship(referenceHeight);
        break;
      case "employment":
        setReferenceHeightEmployment(referenceHeight);
        break;
      case "education":
        setReferenceHeightEducation(referenceHeight);
        break;
    }
  };

  const referenceHeights: ReferenceHeights = {
    entrepreneurship: referenceHeightEntrepreneurship,
    employment: referenceHeightEmployment,
    education: referenceHeightEducation,
  };

  const actualHeight: number =
    width > 576
      ? referenceHeightEmployment + 100
      : referenceHeightEntrepreneurship +
        referenceHeightEmployment +
        referenceHeightEducation +
        150;

  return (
    <svg
      width={width}
      height={actualHeight + 100}
      className={"experienceGraph"}
    >
      <Branch
        // @ts-ignore
        data={EntrepreneurshipData}
        setReferenceHeight={setReferenceHeight}
        referenceHeights={referenceHeights}
        width={width}
        height={actualHeight}
      />
      <Branch
        // @ts-ignore
        data={EducationData}
        setReferenceHeight={setReferenceHeight}
        referenceHeights={referenceHeights}
        width={width}
        height={actualHeight}
      />
      <Branch
        // @ts-ignore
        data={EmploymentData}
        setReferenceHeight={setReferenceHeight}
        referenceHeights={referenceHeights}
        width={width}
        height={actualHeight}
      />
    </svg>
  );
};

export default Graph;
