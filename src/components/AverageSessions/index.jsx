import "./averageSessions.scss";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Render LineChart with Recharts
 * @param { Object } data
 * @return { JSX.Element }
 */
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

  const [day, setDay] = useState(null);
  const onMouseMove = (hoveredData) => {
    if (hoveredData && hoveredData.activePayload) {
      const hoveredX = hoveredData.activePayload[0].payload.day;
      const index = data.data.findIndex((d) => d.day === hoveredX);
      setDay(index);
    }
  };

  const onMouseOut = () => {
    setDay(null);
  };

  return (
    <section className="average-sessions">
      <h2>
        Durée moyenne des
        <br />
        sessions
      </h2>

      <ResponsiveContainer width="100%" height={170}>
        <LineChart
          width="100%"
          height="100%"
          data={data.data}
          onMouseMove={onMouseMove}
          onMouseOut={onMouseOut}
        >
          <XAxis
            axisLine={false}
            dataKey="day"
            stroke="#fff"
            padding={{ left: 20, right: 20 }}
            opacity={0.5}
            tickFormatter={data.week}
            tickLine={false}
            domain={["dataMin - 100", "dataMax + 100"]}
            margin={{
              bottom: 30,
            }}
          />

          <YAxis
            tick={false}
            hide
            domain={["dataMin - 10", "dataMax + 10"]}
            padding={{ bottom: 16, top: 16 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#E60000", fill: "E60000", strokeWidth: 2 }}
          />

          <Line
            activeDot={{
              r: 6,
              fill: "#fff",
              stroke: "rgba(255,255,255, .5)",
              strokeWidth: 8,
            }}
            dot={false}
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            strokeOpacity={0.5}
          />

          <ReferenceArea
            x1={day}
            x2={["dataMax"]}
            y1={["dataMin"]}
            y2={["dataMax"]}
            fill="#E60000"
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

AverageSessions.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AverageSessions;
