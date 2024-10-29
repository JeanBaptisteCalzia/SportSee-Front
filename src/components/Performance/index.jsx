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
import PropTypes from "prop-types";

function Performance({ data }) {
  const reversedArray = data[0].data.slice().reverse();

  if (data[0].data["0"].kind == "1") {
    data[0].data["0"].kind = "Cardio";
  }

  if (data[0].data["1"].kind == "2") {
    data[0].data["1"].kind = "Energie";
  }

  if (data[0].data["2"].kind == "3") {
    data[0].data["2"].kind = "Endurance";
  }

  if (data[0].data["3"].kind == "4") {
    data[0].data["3"].kind = "Force";
  }

  if (data[0].data["4"].kind == "5") {
    data[0].data["4"].kind = "Vitesse";
  }

  if (data[0].data["5"].kind == "6") {
    data[0].data["5"].kind = "Intensité";
  }

  return (
    <section className="performance">
      <ResponsiveContainer width="100%" height={170}>
        <RadarChart cx="50%" cy="50%" data={reversedArray}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fontSize: 12 }}
            stroke="#fff"
            fill="#fff"
            strokeWidth={0}
          />
          <PolarRadiusAxis tick={false} hide={true} axisLine={false} />
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

Performance.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Performance;
