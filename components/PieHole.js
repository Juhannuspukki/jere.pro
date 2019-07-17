import React from 'react';
import { Pie } from '@vx/shape';
import { Group } from '@vx/group';

const white = '#ffffff';

const usage = d => d.proficiency;

export default ({ width, height, margin, data }) => {
  const radius = 45;
  const centerY = height / 2;
  const centerX = width / 2;
  return (
    <svg width={width} height={height}>
          <Group top={centerY - margin.top - 40} left={centerX}>
            <Pie
              data={[data, {proficiency: (100-data.proficiency)}]}
              pieValue={usage}
              outerRadius={radius - 15}
              innerRadius={radius - 25}
              cornerRadius={0}
              padAngle={0}
            >
          {pie => {
            return pie.arcs.map((arc, i) => {
              return (
                (arc.data.language &&
                <g key={`browser-${arc.data.language}-${i}`}>
                  <path d={pie.path(arc)} fill={white} className="pieHole"/>
                  <text
                    className="languageLabel"
                    fill={white}
                    x={0}
                    y={60}
                    fontSize={16}
                    textAnchor="middle"
                  >
                    {arc.data.language}
                  </text>
                </g>
                ))})}}
        </Pie>
        </Group>
    </svg>
  );
};
