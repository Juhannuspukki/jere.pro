import React from "react";
import { Text } from "@visx/text";
import { GlyphDot } from "@visx/glyph";

const Icon = require(`../svg/graphsymbols/download.svg`).default;

const Resize = React.forwardRef((props, ref) => {
  const {
    xPosition,
    yPosition,
    xTextPosition,
    descriptionHeight,
    textPlacement,
    textWidth,
    title,
    subtitle,
    timeFrame,
    description,
    certificate,
    primary,
    contrast,
  } = props;

  const downloadButtonOutlineHeight = 20;
  const r = 5; // border radius

  return (
    <g>
      <GlyphDot
        cx={xPosition}
        cy={yPosition}
        r={6}
        stroke={primary}
        strokeWidth={5}
        className={"outerCircle"}
      />
      <GlyphDot
        cx={xPosition}
        cy={yPosition}
        r={5}
        fill={contrast}
        className={"innerCircle"}
      />
      <Text
        className={"chameleon"}
        x={xTextPosition}
        y={yPosition - 20}
        width={textWidth}
        verticalAnchor="end"
        textAnchor={textPlacement === "left" ? "end" : "start"}
        style={{
          fontSize: 16,
          fontWeight: 600,
          fontFamily:
            "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        {timeFrame}
      </Text>
      <Text
        className={"chameleon"}
        x={xTextPosition}
        y={yPosition}
        width={textWidth}
        verticalAnchor="middle"
        textAnchor={textPlacement === "left" ? "end" : "start"}
        style={{
          fontSize: 20,
          fontWeight: 600,
          fontFamily:
            "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        {title}
      </Text>
      <Text
        className={"chameleon"}
        x={xTextPosition}
        y={yPosition + 25}
        width={textWidth}
        verticalAnchor="middle"
        textAnchor={textPlacement === "left" ? "end" : "start"}
        style={{
          fontSize: 16,
          fontWeight: 600,
          fontFamily:
            "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        {subtitle}
      </Text>
      <Text
        innerRef={ref}
        className={"resizingContent chameleon"}
        x={xTextPosition}
        y={yPosition + 50}
        width={textWidth}
        verticalAnchor="start"
        textAnchor={textPlacement === "left" ? "end" : "start"}
        lineHeight={20}
        style={{
          fontSize: 16,
          fontFamily:
            "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        {description}
      </Text>
      {certificate && (
        <g
          className={"chameleon downloadButton"}
          aria-label={"Open " + certificate.title + "as pdf"}
          role={"button"}
          tabIndex={0}
          onClick={() => window.open(certificate.downloadLink, "_blank")}
        >
          <path
            d={`M${
              textPlacement === "left" ? xTextPosition - 185 : xTextPosition + 5
            },${yPosition + Math.round(descriptionHeight) + 55} h${
              certificate.title === "Graduation Certificate" ||
              certificate.title === "Letter of Reference"
                ? 180
                : 210
            } a${r},${r} 0 0 1 ${r},${r} v${downloadButtonOutlineHeight} a${r},${r} 0 0 1 -${r},${r} h-${
              certificate.title === "Graduation Certificate" ||
              certificate.title === "Letter of Reference"
                ? 180
                : 210
            } a${r},${r} 0 0 1 -${r},-${r} v-${downloadButtonOutlineHeight} a${r},${r} 0 0 1 ${r},-${r} z`}
            strokeWidth={1}
            fill={"transparent"}
            stroke={"white"}
            className={"highlightStrokeOnHover"}
          />
          <Icon
            width={24}
            height={24}
            x={
              textPlacement === "left" ? xTextPosition - 28 : xTextPosition + 3
            }
            y={yPosition + Math.round(descriptionHeight) + 59}
            className={"chameleon"}
          />
          <Text
            className={"resizingContent chameleon"}
            x={
              textPlacement === "left" ? xTextPosition - 32 : xTextPosition + 32
            }
            y={yPosition + Math.round(descriptionHeight) + 65}
            width={textWidth}
            verticalAnchor="start"
            textAnchor={textPlacement === "left" ? "end" : "start"}
            lineHeight={20}
            style={{
              fontSize: 14,
              fontWeight: 600,
              fontFamily:
                "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
            }}
          >
            {certificate.title}
          </Text>
        </g>
      )}
    </g>
  );
});

export default Resize;
