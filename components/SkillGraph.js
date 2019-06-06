import React from 'react';
import { Group } from '@vx/group';
import { scaleLinear } from '@vx/scale';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { withTooltip, TooltipWithBounds } from '@vx/tooltip';
import { localPoint } from '@vx/event';
import { Grid } from '@vx/grid';


class Chart extends React.Component {
  handleMouseOver = (event, datum) => {
    const coords = localPoint(event.target.ownerSVGElement.ownerSVGElement, event);
    this.props.showTooltip({
      tooltipLeft: coords.x,
      tooltipTop: coords.y,
      tooltipData: datum
    });
  };

  render() {
    const points = this.props.skills;

    const {
      tooltipData,
      tooltipLeft,
      tooltipTop,
      tooltipOpen,
      hideTooltip
    } = this.props;

    const width = this.props.parentWidth;
    const height = 400;
    const margin = {
      top: 10,
      left: 60,
      right: 60,
      bottom: 50
    };

    if (width < 10) return null;

    const x = d => d[0];
    const y = d => d[1];

    // Then we'll create some bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    // And then scale the graph by our content
    const xScale = scaleLinear({
      domain: [0, 100],
      range: [0, xMax],
      clamp: true
    });

    const yScale = scaleLinear({
      domain: [0, 100],
      range: [yMax, 0],
      clamp: true
    });

    return (
      // note React.Fragment is only available in >= react@16.2
      <React.Fragment>
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
          {points.map((point, i) => {
            const cx = xScale(x(point));
            const cy = yScale(y(point));

            const Icon = point[3];

            return (
              <Group key={`bar-${i}`}
                     onMouseOver={e => this.handleMouseOver(e, point[2])}
                     onMouseOut={hideTooltip}
              >
                {React.cloneElement(Icon,
                  {
                    key: `point-${point.x}-${i}`,
                    className: "graphIcon",
                    x: cx+35,
                    y: cy-15,
                    width: 50,
                    height: 50,
                  })
                }
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
              label="Skill level →"
              labelOffset={8}
              labelProps={{
                fill: '#fff',
                textAnchor: 'middle',
                fontSize: 20,
                fontFamily: "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif"
              }}
              stroke="#fff"
              tickStroke="#fff"
              tickLabelProps={(value, index) => ({
                fill: '#fff',
                textAnchor: 'end',
                fontSize: 16,
                fontFamily: "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
                dx: '-0.25em',
                dy: '0.25em'
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
              label="Interest in technology →"
              labelProps={{
                fill: '#fff',
                textAnchor: 'middle',
                fontSize: 20,
                fontFamily: "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif"
              }}
              stroke="#fff"
              tickStroke="#fff"
              tickLabelProps={(value, index) => ({
                fill: '#fff',
                textAnchor: 'middle',
                fontSize: 16,
                fontFamily: "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif",
                dx: '-0.25em',
                dy: '0.25em'
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
              textAnchor: 'middle',
              fontSize: 20,
              color: '#000000',
              fontFamily: "SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif"
            }}
          >
            <strong>{tooltipData}</strong>
          </TooltipWithBounds>
        )}
      </React.Fragment>
    );
  }
}

export default withTooltip(Chart);

// ... somewhere else, render it ...
// <BarGraph />
