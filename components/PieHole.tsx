import React from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";

interface PieHoleProps {
  width: number;
  height: number;
  margin: { top: number; left: number; right: number; bottom: number };
  data: { language: string; proficiency: number };
}

const usage = (d: { language: string | null; proficiency: number }) =>
  d.proficiency;

const PieHole: React.FC<PieHoleProps> = (props) => {
  const { data, width, height, margin } = props;
  const radius: number = 45;
  const centerY: number = height / 2;
  const centerX: number = width / 2;

  return (
    <svg width={width} height={height}>
      <Group top={centerY - margin.top - 40} left={centerX}>
        <Pie
          data={[data, { proficiency: 100 - data.proficiency, language: null }]}
          pieValue={usage}
          outerRadius={radius - 15}
          innerRadius={radius - 25}
          cornerRadius={0}
          padAngle={0}
        >
          {(pie) => {
            return pie.arcs.map((arc, i) => {
              return (
                arc.data.language && (
                  <g key={`browser-${arc.data.language}`}>
                    {/* @ts-ignore */}
                    <path d={pie.path(arc)} className="pieHole chameleon" />
                    <text
                      className="languageLabel chameleon"
                      x={0}
                      y={60}
                      fontSize={16}
                      textAnchor="middle"
                    >
                      {arc.data.language}
                    </text>
                  </g>
                )
              );
            });
          }}
        </Pie>
      </Group>
    </svg>
  );
};

export default PieHole;
