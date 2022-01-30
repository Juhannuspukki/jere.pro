import React, { useLayoutEffect, useRef, useState } from "react";
import { Text } from "@visx/text";
import { GlyphDot } from "@visx/glyph";
import { DataLeaf } from "./IamGroot";

const Icon = require(`../../svg/graphsymbols/download.svg`).default;

interface LeafProps {
  data: DataLeaf;
  index: number;
  width: number;
  side: "left" | "right";
  boxHeights: number[];
  updateBoxHeights: (height: number, index: number) => void;
  contrast: string;
  primary: string;
}

const Leaf: React.FC<LeafProps> = ({
  data,
  index,
  width,
  side,
  boxHeights,
  updateBoxHeights,
  contrast,
  primary,
}) => {
  const [yPosition, setYPosition] = useState<number>(0);
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0);

  // reference to the box of text that changes its height when viewport is resized
  const ref = useRef(null);

  // put everything on the right side on small screens
  if (!(width > 576)) {
    side = "right";
  }

  const dotPosition = side === "left" ? width - 15 : 15;
  const textPosition = side === "left" ? width - 40 : 40;

  const textWidth = (): number => {
    // big screen
    if (width > 576) return width / 2 - 45 < 325 ? width / 2 - 45 : 325;
    // small screen
    else return width / 2 - 30 < 240 ? 240 : width / 2 - 30;
  };

  // automatic resizing
  useLayoutEffect(() => {
    // measure height, add a constant to it and  then insert it to an array
    // @ts-ignore
    const descriptionHeight = ref.current?.getBBox().height;
    updateBoxHeights(descriptionHeight + (data.certificate ? 175 : 125), index);

    // to get a proper y-coordinate for this box, sum elements in array together with the determined starting point
    const position = [...boxHeights]
      .splice(0, index)
      .reduce((a, b) => a + b, 0);

    setYPosition(position + 100);
    setDescriptionHeight(descriptionHeight);

    /*
    console.log(
      `index ${index}: ${data.title} - yPosition : ${yPosition} - height : ${descriptionHeight}`
    ); */
  }, [updateBoxHeights, data.certificate, index, boxHeights, yPosition]);

  const downloadButtonOutlineHeight = 20;
  const r = 5; // border radius

  return (
    <g>
      <GlyphDot
        cx={dotPosition}
        cy={yPosition}
        r={6}
        stroke={primary}
        strokeWidth={5}
        className={"outerCircle"}
      />
      <GlyphDot
        cx={dotPosition}
        cy={yPosition}
        r={5}
        fill={contrast}
        className={"innerCircle"}
      />
      <Text
        className={"chameleon"}
        x={textPosition}
        y={yPosition - 20}
        width={textWidth()}
        verticalAnchor="end"
        textAnchor={side === "left" ? "end" : "start"}
        style={{
          fontSize: 16,
          fontWeight: 600,
          fontFamily:
            "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        {data.timeFrame}
      </Text>
      <Text
        className={"chameleon"}
        x={textPosition}
        y={yPosition}
        width={textWidth()}
        verticalAnchor="middle"
        textAnchor={side === "left" ? "end" : "start"}
        style={{
          fontSize: 20,
          fontWeight: 600,
          fontFamily:
            "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        {data.title}
      </Text>
      <Text
        className={"chameleon"}
        x={textPosition}
        y={yPosition + 25}
        width={textWidth()}
        verticalAnchor="middle"
        textAnchor={side === "left" ? "end" : "start"}
        style={{
          fontSize: 16,
          fontWeight: 600,
          fontFamily:
            "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        {data.subtitle}
      </Text>
      <Text
        innerRef={ref}
        className={"resizingContent chameleon"}
        x={textPosition}
        y={yPosition + 50}
        width={textWidth()}
        verticalAnchor="start"
        textAnchor={side === "left" ? "end" : "start"}
        lineHeight={20}
        style={{
          fontSize: 16,
          fontFamily:
            "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        {data.description}
      </Text>
      {data.certificate && (
        <svg
          className={"chameleon downloadButton"}
          aria-label={"Open " + data.certificate.title + "as pdf"}
          role={"button"}
          tabIndex={0}
          onClick={() =>
            window.open(
              // @ts-ignore
              data.certificate.downloadLink,
              "_blank"
            )
          }
          x={0}
          y={yPosition + descriptionHeight}
        >
          <path
            d={`M${
              side === "left" ? textPosition - 185 : textPosition + 5
            },${55} h${getFrameWidth(
              data.certificate.title
            )} a${r},${r} 0 0 1 ${r},${r} v${downloadButtonOutlineHeight} a${r},${r} 0 0 1 -${r},${r} h-${getFrameWidth(
              data.certificate.title
            )} a${r},${r} 0 0 1 -${r},-${r} v-${downloadButtonOutlineHeight} a${r},${r} 0 0 1 ${r},-${r} z`}
            strokeWidth={1}
            fill={"transparent"}
            stroke={"white"}
            className={"downloadButtonOutline highlightStrokeOnHover"}
          />
          <Icon
            width={24}
            height={24}
            x={side === "left" ? textPosition - 28 : textPosition + 3}
            y={59}
            className={"chameleon"}
          />
          <Text
            className={"resizingContent chameleon"}
            x={side === "left" ? textPosition - 32 : textPosition + 32}
            y={65}
            width={textWidth()}
            verticalAnchor="start"
            textAnchor={side === "left" ? "end" : "start"}
            lineHeight={20}
            style={{
              fontSize: 14,
              fontWeight: 600,
              fontFamily:
                "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
            }}
          >
            {data.certificate.title}
          </Text>
        </svg>
      )}
    </g>
  );
};

const getFrameWidth = (text: string) => {
  switch (text) {
    case "Graduation Certificate":
      return 180;
    case "Letter of Reference":
      return 160;
    case "Certificate of Employment":
      return 210;
  }
};

export default Leaf;
