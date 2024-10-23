import "./score.scss";
import React from "react";
import { ResponsiveContainer, Label, PieChart, Pie, Cell } from "recharts";

function Score({ todayScore, data, score }) {
  return (
    <section className="score">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            dataKey={todayScore ? "todayScore" : "score"}
            innerRadius={70}
            outerRadius={80}
            cornerRadius={40}
            fill="#E60000"
            startAngle={-270}
            endAngle={todayScore ? todayScore * 360 - 270 : score * 360 - 270}
          ></Pie>
          <Pie
            data={data}
            dataKey={todayScore ? "todayScore" : "score"}
            innerRadius={0}
            outerRadius={70}
            isAnimationActive={false}
          >
            <Cell fill="#fff" stroke="#fff" />;
            <Label
              value={`${todayScore ? todayScore * 100 : score * 100}%`}
              position="center"
              fill="black"
              className="score__number"
              dx={0}
              dy={-20}
            />
            <Label
              value="de votre"
              position="center"
              fill="black"
              dx={0}
              dy={10}
              className="score__label"
            />
            <Label
              value="objectif"
              dx={0}
              dy={30}
              position="center"
              fill="black"
              className="score__label"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
}

export default Score;
