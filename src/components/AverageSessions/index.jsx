import "./averageSessions.scss";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AverageSessions({ data }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="custom-tooltip__label">{payload[0].value}min</p>
        </div>
      );
    }
  };

  return (
    <section className="average-sessions">
      <h2>
        Durée moyenne des
        <br />
        sessions
      </h2>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart
          width="100%"
          height="100%"
          data={data[0].sessions}
          // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="day" stroke="#fff" />
          <YAxis tick={false} hide />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

export default AverageSessions;
