import React from "react";
import { Group } from "@visx/group";
import { GlyphDot } from "@visx/glyph";
import { LinePath } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { curveMonotoneY } from "@visx/curve";
import { Text } from "@visx/text";
import { timeFormat } from "d3-time-format";

const format = timeFormat("%b %Y");
const formatDate = (date) => format(date);

// accessors
const date = (d) => d;

// colors
const primary = "#fff";
const contrast = "#000";

const Graph = ({ width, height, margin, data }) => {
  const filterData = (d) =>
    d.reduce((accumulator, currentValue) => {
      if (width > 576) {
        accumulator.push({
          ...currentValue,
          xPosition: currentValue.position.medium.x,
          yPosition: currentValue.position.medium.y,
        });
      } else {
        accumulator.push({
          ...currentValue,
          xPosition: currentValue.position.small.x,
          yPosition: currentValue.position.small.y,
        });
      }
      return accumulator;
    }, []);

  const responsiveData = [];

  data.forEach((i) => responsiveData.push(filterData(i)));

  // scales
  const yScale = scaleLinear({
    domain: [0, 430],
  });

  // bounds
  const yMax = height - margin.top - margin.bottom;

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
  const y = (d) => yScale(d.yPosition);
  const x = (d) => (d.xPosition === "left" ? xLeft : xRight);
  const xText = (d) => (d.xPosition === "left" ? xLeft - 25 : xRight + 25);
  // update scale range to match bounds
  yScale.range([yMax, 0]);

  const mapDots = (dataPoints, source) =>
    dataPoints.map((d, i) => {
      const yPosition = y(d);
      const xPosition = x(d);
      const xTextPosition = xText(d);

      if (d.title === "Connector") {
        return;
      }

      return (
        <g key={`line-point-${source}-${i}`} className={"textContainer"}>
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
            y={yPosition - 25}
            width={textWidth}
            verticalAnchor="end"
            textAnchor={d.xPosition === "left" ? "end" : "start"}
            style={{
              fontSize: 16,
              fontWeight: 600,
              fontFamily:
                "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
            }}
          >
            {d.timeFrame}
          </Text>
          <Text
            className={"chameleon"}
            x={xTextPosition}
            y={yPosition}
            width={textWidth}
            verticalAnchor="middle"
            textAnchor={d.xPosition === "left" ? "end" : "start"}
            style={{
              fontSize: 20,
              fontWeight: 600,
              fontFamily:
                "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
            }}
          >
            {d.title}
          </Text>
          <Text
            className={"chameleon"}
            x={xTextPosition}
            y={yPosition + 25}
            width={textWidth}
            verticalAnchor="start"
            textAnchor={d.xPosition === "left" ? "end" : "start"}
            lineHeight={20}
            style={{
              fontSize: 16,
              fontFamily:
                "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
            }}
          >
            {d.description}
          </Text>
        </g>
      );
    });

  const mapLines = (dataPoints, source) => {
    let initialValue = [];
    dataPoints = dataPoints.reduce((accumulator, currentValue) => {
      accumulator.push({
        yPosition: currentValue.yPosition,
        xPosition: currentValue.xPosition,
      });

      return accumulator;
    }, initialValue);
    return (
      <LinePath
        key={`line-${source}`}
        data={dataPoints}
        x={x}
        y={y}
        stroke={primary}
        strokeWidth={5}
        curve={curveMonotoneY}
      />
    );
  };

  return (
    <svg width={width} height={height + 100} className={"experienceGraph"}>
      <Group top={margin.top + 100} left={margin.left}>
        {mapLines(responsiveData[0], "work")}
        {mapDots(responsiveData[0], "work")}
        {mapLines(responsiveData[1], "private")}
        {mapDots(responsiveData[1], "private")}
        {mapLines(responsiveData[2], "education")}
        {mapDots(responsiveData[2], "education")}
      </Group>
      <Group top={margin.top + 100} left={margin.left}></Group>
    </svg>
  );
};

export default Graph;
