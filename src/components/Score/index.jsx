import "./score.scss";
import { ResponsiveContainer, Label, PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";

/**
 * Render PieChart with Recharts
 * @param { Array.<Object> } data
 * @return { JSX.Element }
 */
function Score({ data }) {
  return (
    <section className="score">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height={170}>
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            dataKey="score"
            innerRadius={70}
            outerRadius={80}
            cornerRadius={40}
            fill="#E60000"
            startAngle={-270}
            endAngle={data[0].todayScore * 360 - 270}
          ></Pie>
          <Pie
            data={data}
            dataKey="score"
            innerRadius={0}
            outerRadius={70}
            isAnimationActive={false}
          >
            <Cell fill="#fff" stroke="#fff" />;
            <Label
              value={`${data[0].score}%`}
              position="center"
              fill="black"
              className="score__number"
              dx={0}
              dy={-20}
            />
            <Label
              value="de votre"
              position="center"
              dx={0}
              dy={10}
              className="score__label"
            />
            <Label
              value="objectif"
              dx={0}
              dy={30}
              position="center"
              className="score__label"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
}

Score.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Score;
