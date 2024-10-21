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

  if (data[0].sessions["0"].day == "1") {
    data[0].sessions["0"].day = "L";
  }

  if (data[0].sessions["1"].day == "2") {
    data[0].sessions["1"].day = "M";
  }

  if (data[0].sessions["2"].day == "3") {
    data[0].sessions["2"].day = "M";
  }

  if (data[0].sessions["3"].day == "4") {
    data[0].sessions["3"].day = "J";
  }

  if (data[0].sessions["4"].day == "5") {
    data[0].sessions["4"].day = "V";
  }

  if (data[0].sessions["5"].day == "6") {
    data[0].sessions["5"].day = "S";
  }

  if (data[0].sessions["6"].day == "7") {
    data[0].sessions["6"].day = "D";
  }

  return (
    <section className="average-sessions">
      <h2>
        Durée moyenne des
        <br />
        sessions
      </h2>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart
          width="100%"
          height="100%"
          data={data[0].sessions}
          // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            axisLine={false}
            dataKey="day"
            stroke="#fff"
            padding={{ left: 20, right: 20 }}
          />
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
