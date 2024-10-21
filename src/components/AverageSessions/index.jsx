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
  return (
    <section className="average-sessions">
      <h2>
        Durée moyenne des
        <br />
        sessions
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width="100%"
          height="100%"
          data={data}
          // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
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
