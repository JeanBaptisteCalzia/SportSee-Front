import "./performance.scss";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function Performance({ data }) {
  return (
    <section className="performance">
      <ResponsiveContainer width="100%" height={260}>
        <RadarChart cx="50%" cy="50%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default Performance;
