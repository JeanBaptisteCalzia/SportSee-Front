import "./activity.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Render BarChart with Recharts
 * @param { Object } data
 * @return { JSX.Element }
 */
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
      <div className="activity__title">
        <h2>Activité quotidienne</h2>
        <ul>
          <li>Poids (kg)</li>
          <li>Calories brûlées (kCal)</li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height={224}>
        <BarChart
          width={500}
          height={300}
          data={data.activity}
          margin={{
            top: 20,
            right: -20,
            left: -60,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="day" stroke="#777" axisLine={{ stroke: "#EAF0F4" }} />
          <YAxis
            yAxisId="left"
            orientation="right"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="right"
            tickLine={false}
            axisLine={false}
            stroke="#777"
            type="number"
            strokeWidth="1px"
            domain={["dataMin - 100", "dataMax + 10"]}
          />
          <Tooltip content={<CustomTooltip />} />

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

Activity.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Activity;
