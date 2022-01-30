import React from "react";
import { Group } from "@visx/group";
import { scaleLinear } from "@visx/scale";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { Grid } from "@visx/grid";

import slugify from "../lib/slugify";
import { Skill } from "../pages/skills/[skill]";
import { Point } from "@visx/point";

interface ChartProps {
  skills: Skill[];
  link: string;
  activeTechs: string[];
  setActiveTech: (tech: string) => void;
  parentWidth: number;
}

interface TooltipData {
  title: string;
  interest: number;
  confidence: number;
}

const Chart: React.FC<ChartProps> = (props) => {
  const { skills, link, activeTechs, setActiveTech, parentWidth } = props;
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip<TooltipData>();

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    // use TooltipWithBounds
    detectBounds: true,
    // when tooltip containers are scrolled, this will correctly update the Tooltip position
    scroll: true,
  });

  const handleMouseOver = (
    event: React.MouseEvent<SVGGElement, MouseEvent>,
    datum: string,
    confidence: number,
    interest: number
  ) => {
    const coords: Point | null = localPoint(
      event.currentTarget.ownerSVGElement!,
      event
    );

    coords &&
      showTooltip({
        tooltipLeft: coords.x,
        tooltipTop: coords.y,
        tooltipData: {
          title: datum,
          interest: interest,
          confidence: confidence,
        },
      });
  };

  const width = parentWidth;
  const height = 370;
  const margin = {
    top: 10,
    left: 40,
    right: 40,
    bottom: 50,
  };

  if (width < 10) return null;

  // Then we'll create some bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // And then scale the graph by our content
  const xScale = scaleLinear({
    domain: [0, 100],
    range: [0, xMax],
    clamp: true,
  });

  const yScale = scaleLinear({
    domain: [0, 100],
    range: [yMax, 0],
    clamp: true,
  });

  return (
    // note React.Fragment is only available in >= react@16.2
    <>
      <svg
        ref={containerRef}
        width={width}
        height={height}
        className="graphSVG"
      >
        <Grid
          className="graphGrid"
          top={margin.top}
          left={margin.left}
          xScale={xScale}
          yScale={yScale}
          stroke="#fff"
          width={xMax}
          height={yMax}
          strokeDasharray="2,2"
          numTicksRows={5}
          numTicksColumns={5}
        />
        {skills.map((point, i) => {
          const cx = xScale(point.confidence);
          const cy = yScale(point.interest);

          const Icon = require(`../svg/graphsymbols/${slugify(
            point.icon
          )}.svg`).default;

          return (
            <Group
              key={`bar-${i}`}
              onMouseOver={(e) =>
                handleMouseOver(e, point.icon, point.confidence, point.interest)
              }
              onMouseOut={hideTooltip}
              className={"graphIconContainer"}
              style={{
                transformOrigin: `${cx + 60}px ${cy + 10}px`,
              }}
            >
              <Icon
                key={`point-${point.icon}`}
                className={
                  activeTechs.includes(point.icon) || activeTechs.length === 0
                    ? "graphIcon chameleon highLightOnHover"
                    : "graphIcon chameleon highLightOnHover passive"
                }
                x={cx + 35}
                y={cy - 15}
                width={width < 500 ? 40 : 50}
                height={width < 500 ? 40 : 50}
                onClick={() => setActiveTech(point.icon)}
              />
            </Group>
          );
        })}
        <Group>
          <AxisLeft
            top={margin.top}
            left={margin.left}
            scale={yScale}
            hideAxisLine={true}
            hideTicks={true}
            hideZero={true}
            numTicks={0}
            label="Interest in technology →"
            labelOffset={8}
            labelProps={{
              className: "chameleon",
              textAnchor: "middle",
              fontSize: 20,
              fontFamily:
                "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
            }}
            stroke="#fff"
            tickStroke="#fff"
            tickLabelProps={(value, index) => ({
              className: "chameleon",
              textAnchor: "end",
              fontSize: 16,
              fontFamily:
                "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
              dx: "-0.25em",
              dy: "0.25em",
            })}
          />
          <AxisBottom
            hideAxisLine={true}
            hideTicks={true}
            hideZero={true}
            top={yMax}
            left={margin.left}
            scale={xScale}
            numTicks={0}
            labelOffset={0}
            label="Skill level →"
            labelProps={{
              className: "chameleon",
              textAnchor: "middle",
              fontSize: 20,
              fontFamily:
                "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
            }}
            stroke="#fff"
            tickStroke="#fff"
            tickLabelProps={() => ({
              className: "chameleon",
              textAnchor: "middle",
              fontSize: 16,
              fontFamily:
                "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
              dx: "-0.25em",
              dy: "0.25em",
            })}
          />
        </Group>
      </svg>

      {tooltipOpen && tooltipData && (
        <TooltipInPortal
          // set this to random so it correctly updates with parent bounds
          key={Math.random()}
          top={tooltipTop}
          left={tooltipLeft}
          applyPositionStyle={true}
          style={{
            textAnchor: "middle",
            fontSize: 20,
            color: "#000000",
            backgroundColor: "#FFFFFF",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px",
            padding: 8,
            borderRadius: 4,
            maxWidth: width / 2,
            fontFamily:
              "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
          }}
        >
          <strong>{tooltipData.title}</strong>
          <div className={"extendedTooltip"}>
            <small className={"tooltipText"}>
              {chooseInterestResponse(
                tooltipData.interest,
                tooltipData.confidence
              )}
            </small>
            <br />
            <small className={"tooltipText"}>
              {chooseConfidenceResponse(
                tooltipData.interest,
                tooltipData.confidence
              )}
            </small>
            <br />
          </div>
          <small className={`${link} tooltipText`}>
            <br />
            {props.activeTechs.includes(tooltipData.title)
              ? "(Click to deselect filter)"
              : "(Click to use as a filter)"}
          </small>
        </TooltipInPortal>
      )}
    </>
  );
};

const chooseInterestResponse = (interest: number, confidence: number) => {
  if (confidence < 31) {
    if (interest < 16) {
      return "Not interested.";
    } else if (interest < 36) {
      return "I am somewhat curious about this technology.";
    } else if (interest < 61) {
      return "I am quite curious about this technology.";
    } else if (interest < 100) {
      return "I have great interest in this technology.";
    }
  } else {
    if (interest < 16) {
      return "Never again.";
    } else if (interest < 36) {
      return "I try to avoid this technology.";
    } else if (interest < 61) {
      return "I like working with this technology.";
    } else if (interest < 100) {
      return "I greatly enjoy working with this technology.";
    }
  }
};

const chooseConfidenceResponse = (interest: number, confidence: number) => {
  if (confidence < 16) {
    return "I would panic if told to work with this technology.";
  } else if (confidence < 36) {
    return "I need to google excessively when using this technology.";
  } else if (confidence < 61) {
    return "I can deliver a project using this technology (but not by tomorrow).";
  } else if (confidence < 100) {
    return "I have delivered a complex project using this technology.";
  }
};

export default Chart;

// ... somewhere else, render it ...
// <BarGraph />
