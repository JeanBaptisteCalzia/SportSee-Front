import "./activity.scss";
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Activity({ data }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="custom-tooltip__label">{payload[0].value}kg</p>
          <p className="custom-tooltip__label">{payload[1].value}Kcal</p>
        </div>
      );
    }
  };

  return (
    <section className="activity">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={156}>
        <BarChart
          width={500}
          height={300}
          data={data[0].sessions}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" axisLine={false} tick={false} hide />
          <YAxis
            axisLine={false}
            yAxisId="right"
            orientation="right"
            stroke="#9B9EAC"
            type="number"
            domain={[100, "dataMax"]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend layout="vertical" verticalAlign="top" align="right" />
          <Bar
            yAxisId="left"
            dataKey="kilogram"
            fill="#282D30"
            barSize={8}
            radius={[20, 20, 0, 0]}
          />
          <Bar
            yAxisId="right"
            dataKey="calories"
            fill="#E60000"
            barSize={8}
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default Activity;
