import "./score.scss";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

function Score({ todayScore, data }) {
  return (
    <section className="score">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height={260}>
        <RadialBarChart
          width={150}
          height={150}
          data={data}
          innerRadius={75}
          outerRadius={75}
          barSize={10}
          startAngle={-270}
          endAngle={90}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 1]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            barSize={10}
            dataKey="todayScore"
            cornerRadius={100}
            fill="#FF0000"
          />
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            <tspan
              textAnchor="middle"
              dominantBaseline="middle"
              className="score__number"
              x="50%"
              y="45%"
            >
              {todayScore * 100} %
            </tspan>
            <tspan
              textAnchor="middle"
              dominantBaseline="middle"
              className="score__label"
              fill="#74798C"
              x="50%"
              dy="32"
            >
              de votre
            </tspan>
            <tspan
              textAnchor="middle"
              dominantBaseline="middle"
              className="score__label"
              fill="#74798C"
              x="50%"
              dy="24"
            >
              objectif
            </tspan>
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default Score;
