import React from "react";
import { Group } from "@vx/group";
import { scaleLinear } from "@vx/scale";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { withTooltip, TooltipWithBounds } from "@vx/tooltip";
import { localPoint } from "@vx/event";
import { Grid } from "@vx/grid";
import { Svg } from "react-optimized-image";

const chooseInterestResponse = (interest, confidence) => {
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
      return "Not interested.";
    } else if (interest < 36) {
      return "I am interested in this technology.";
    } else if (interest < 61) {
      return "I like working with this technology.";
    } else if (interest < 100) {
      return "I greatly enjoy working with this technology.";
    }
  }
};

const chooseConfidenceResponse = (interest, confidence) => {
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

const Chart = (props) => {
  const handleMouseOver = (event, datum, confidence, interest) => {
    const coords = localPoint(
      event.target.ownerSVGElement.ownerSVGElement,
      event
    );
    props.showTooltip({
      tooltipLeft: coords.x,
      tooltipTop: coords.y,
      tooltipData: { title: datum, interest: interest, confidence: confidence },
    });
  };

  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    hideTooltip,
  } = props;

  const width = props.parentWidth;
  const height = 350;
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
      <svg width={width} height={height} className="graphSVG">
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
        {props.skills.map((point, i) => {
          const cx = xScale(point.confidence);
          const cy = yScale(point.interest);

          // Dynamically loading svgs
          const Icon = (
            <Svg
              src={require(`../svg/graphsymbols/${point.icon
                .toLowerCase()
                .replace(/\./g, "")}.svg`)}
            />
          );

          return (
            <Group
              key={`bar-${i}`}
              onMouseOver={(e) =>
                handleMouseOver(e, point.icon, point.confidence, point.interest)
              }
              onMouseOut={hideTooltip}
            >
              {React.cloneElement(Icon, {
                key: `point-${point.x}-${i}`,
                className: "graphIcon chameleon highLightOnHover",
                x: cx + 35,
                y: cy - 15,
                width: 50,
                height: 50,
                onClick: () => props.setActiveTech(point.icon),
              })}
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
            tickLabelProps={(value, index) => ({
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

      {tooltipOpen && (
        <TooltipWithBounds
          // set this to random so it correctly updates with parent bounds
          key={Math.random()}
          top={tooltipTop}
          left={tooltipLeft}
          style={{
            textAnchor: "middle",
            fontSize: 20,
            color: "#000000",
            fontFamily:
              "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
          }}
        >
          <strong>{tooltipData.title}</strong>
          <div className={"extendedTooltip"}>
            <small>
              {chooseInterestResponse(
                tooltipData.interest,
                tooltipData.confidence
              )}
            </small>
            <br />
            <small>
              {chooseConfidenceResponse(
                tooltipData.interest,
                tooltipData.confidence
              )}
            </small>
          </div>
        </TooltipWithBounds>
      )}
    </>
  );
};

export default withTooltip(Chart);

// ... somewhere else, render it ...
// <BarGraph />
