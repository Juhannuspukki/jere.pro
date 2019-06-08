import React from 'react';
import { Group } from '@vx/group';
import { GlyphDot } from '@vx/glyph';
import { LinePath } from '@vx/shape';
import { AxisLeft, AxisRight} from '@vx/axis';
import { scaleTime } from '@vx/scale';
import { curveMonotoneX } from '@vx/curve';
import { timeParse, timeFormat } from 'd3-time-format';
import { Annotation, ConnectorLine,  Note } from 'react-annotation'


const format = timeFormat('%b %Y');
const formatDate = date => format(date);

// accessors
const date = d => d.date;

// scales
const yScaleLeft = scaleTime({
  domain: [
    new Date("2012-05-01"),
    Date.now(),
  ]
});

const yScaleRight = scaleTime({
  domain: [
    new Date("2017-01-01"),
    Date.now(),
  ]
});

// positions
const yLeft = d => yScaleLeft(date(d));
const yRight = d => yScaleRight(date(d));

// colors
const primary = '#fff';
const contrast = '#000';

export default ({ width, height, margin, data }) => {
  // bounds
  const yMax = height - margin.top - margin.bottom;

  const xConstWorking = width/2 - margin.left + 15;
  const xConstEducation = width/2 -margin.right -15;

  // update scale range to match bounds
  yScaleLeft.range([yMax, 0]);
  yScaleRight.range([yMax, 0]);

  const mapDots = (dataPoints, source) => dataPoints.map((d, i) => {
    const y = source === "education" ? yLeft : yRight;
    const startDot = y(d.workingPeriod[0]);
    const endDot = y(d.workingPeriod[1]);
    const xConst = source === "education" ? xConstEducation : xConstWorking;
    const maxWidth = source === "education" ? -25 : 25;
    const distance = source === "education" ? -10 : 10;
    return (
      <g key={`line-point-${source}-${i}`}>
        <GlyphDot cx={xConst} cy={startDot} r={6} stroke={primary} strokeWidth={5} />
        <GlyphDot cx={xConst} cy={startDot} r={5} fill={contrast} />
        <GlyphDot cx={xConst} cy={endDot} r={6} stroke={primary} strokeWidth={5} />
        <GlyphDot cx={xConst} cy={endDot} r={5} fill={contrast} />
        <Annotation
          x={xConst + distance}
          y={(startDot+endDot)/2}
          dy={-20}
          dx={maxWidth}
          color={"#fff"}
          title={d.title + formatDate(d.workingPeriod[0].date) }
          label={d.description}
        >
          <ConnectorLine/>
          <Note
            lineType={"vertical"}
            bgPadding={{"top":15,"left":10,"right":10,"bottom":10}}
            padding={15}
            titleColor={"#fff"}
            align={"middle"}
            wrapSplitter={(/(.{20}[^\s]*)/gm)}
          />
        </Annotation>
      </g>
    )
  });

  const mapLines = (dataPoints, source) => dataPoints.map((d, i) => {
    const xConst = source === "education" ? xConstEducation : xConstWorking;
    const y = source === "education" ? yLeft : yRight;
    return (
      <LinePath

        key={`line-${source}-${i}`}
        data={d.workingPeriod}
        x={xConst}
        y={y}
        stroke={primary}
        strokeWidth={5}
        curve={curveMonotoneX}
      />
    );
  });

  return (
    <svg width={width} height={height+100}>
      <Group
        top={margin.top+100}
        left={margin.left}
      >

        {mapLines(data.working, "working")}
        {mapLines(data.education, "education")}
        {mapDots(data.working, "working")}
        {mapDots(data.education, "education")}

      </Group>
      <Group
        top={margin.top+100}
        left={margin.left}
      >
        <AxisLeft
          top={margin.top}
          left={0}
          hideAxisLine={true}
          hideTicks={true}
          hideZero={true}
          scale={yScaleLeft}
          stroke="#fff"
          tickStroke="#fff"
          tickFormat={formatDate}
          tickLabelProps={(value, index) => ({
            fill: '#fff',
            fontSize: 16,
            textAnchor: 'end',
            dy: '0.33em',
            fontFamily: "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif"
          })}
        />
        <AxisRight
          top={margin.top}
          left={width-margin.right*2}
          hideAxisLine={true}
          hideTicks={true}
          hideZero={true}
          scale={yScaleRight}
          stroke="#fff"
          tickStroke="#fff"
          tickFormat={formatDate}
          tickLabelProps={(value, index) => ({
            fill: '#fff',
            fontSize: 16,
            textAnchor: 'start',
            dy: '0.33em',
            fontFamily: "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif"
          })}
        />
      </Group>
    </svg>
  );
};
