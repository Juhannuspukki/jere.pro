import React from 'react';
import { Group } from '@vx/group';
import { GlyphDot } from '@vx/glyph';
import { LinePath } from '@vx/shape';
import { AxisLeft, AxisRight} from '@vx/axis';
import { scaleTime, scaleLinear } from '@vx/scale';
import { curveMonotoneY, curveMonotoneX } from '@vx/curve';
import { Text } from '@vx/text';
import { timeParse, timeFormat } from 'd3-time-format';

const format = timeFormat('%b %Y');
const formatDate = date => format(date);

// accessors
const date = d => d;

// scales
const yScale = scaleLinear({
  domain: [0, 300]
});

// colors
const primary = '#fff';
const contrast = '#000';

export default ({ width, height, margin, data }) => {
  // bounds
  const yMax = height - margin.top - margin.bottom;
  const xRight = width/2 - margin.left + 15;
  const xLeft = width/2 - margin.right - 15;
  const calculateTextWidth = width/2 - 60 < 325 ? width/2 - 60 : 325;
  // positions
  const y = d => yScale(d.yPosition);
  const x = d => d.xPosition === "left" ? xLeft : xRight;
  const xText = d => d.xPosition === "left" ? xLeft - 25 : xRight + 25;
  // update scale range to match bounds
  yScale.range([yMax, 0]);

  const mapDots = (dataPoints, source) => dataPoints.map((d, i) => {
    const yPosition = y(d);
    const xPosition = x(d);
    const xTextPosition = xText(d);

    if (d.title === "Connector") {
      return;
    }

    return (
      <g key={`line-point-${source}-${i}`}>
        <GlyphDot cx={xPosition} cy={yPosition} r={6} stroke={primary} strokeWidth={5} />
        <GlyphDot cx={xPosition} cy={yPosition} r={5} fill={contrast} />
        <Text
          x={xTextPosition}
          y={yPosition - 25}
          width={calculateTextWidth}
          verticalAnchor="end"
          textAnchor={d.xPosition === "left" ? "end" : "start"}
          style={
            {
              fill: '#fff',
              fontSize: 16,
              fontFamily: "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif"
            }
          }
        >
          {`${formatDate(d.timeFrame[0].date)} - ${formatDate(d.timeFrame[1].date)}`}
        </Text>
        <Text
          x={xTextPosition}
          y={yPosition}
          width={calculateTextWidth}
          verticalAnchor="middle"
          textAnchor={d.xPosition === "left" ? "end" : "start"}
          style={
            {
            fill: '#fff',
            fontSize: 20,
            fontWeight: 700,
            fontFamily: "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif"
            }
          }
        >
          {d.title}
        </Text>
        <Text
          x={xTextPosition}
          y={yPosition + 25}
          width={calculateTextWidth}
          verticalAnchor="start"
          textAnchor={d.xPosition === "left" ? "end" : "start"}
          lineHeight={20}
          style={
              {
                fill: '#fff',
                fontSize: 16,
                fontFamily: "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif"
              }
            }
        >
          {d.description}
        </Text>
      </g>
    )
  });

  const mapLines = (dataPoints, source) => {
    let initialValue = [];
    dataPoints = dataPoints.reduce(
      (accumulator, currentValue) => {
        accumulator.push(
          {yPosition: currentValue.yPosition, xPosition: currentValue.xPosition}
        );

        return accumulator;
      },
      initialValue);
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
    <svg width={width} height={height+100}>
      <Group
        top={margin.top+100}
        left={margin.left}
      >

        {mapLines(data.work, "work")}
        {mapDots(data.work, "work")}
        {mapLines(data.private, "private")}
        {mapDots(data.private, "private")}
        {mapLines(data.education, "education")}
        {mapDots(data.education, "education")}

      </Group>
      <Group
        top={margin.top+100}
        left={margin.left}
      >
      </Group>
    </svg>
  );
};
