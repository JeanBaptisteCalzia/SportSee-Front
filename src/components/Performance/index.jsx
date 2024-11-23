import "./performance.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Render RadarChart with Recharts
 * @param { Object } data
 * @return { JSX.Element }
 */
function Performance({ data }) {
  return (
    <section className="performance">
      <ResponsiveContainer width="100%" height={170}>
        <RadarChart cx="50%" cy="50%" data={data.performance}>
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
  data: PropTypes.object.isRequired,
};

export default Performance;
