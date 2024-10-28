// import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import KeyData from "../../components/KeyData";
import Score from "../../components/Score";
import Performance from "../../components/Performance";
import AverageSessions from "../../components/AverageSessions";
import Activity from "../../components/Activity";
import iconEnergy from "../../assets/icon/energy.svg";
import iconChicken from "../../assets/icon/chicken.svg";
import iconApple from "../../assets/icon/apple.svg";
import iconCheeseburger from "../../assets/icon/cheeseburger.svg";
import ToggleBtn from "../../components/ToggleBtn";
import Loader from "../../components/Loader";
import { fetchUserMainData } from "../../utils/api";
import { fetchUserActivity } from "../../utils/api";
import { fetchUserPerformance } from "../../utils/api";
import { fetchUserAverageSessions } from "../../utils/api";

import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../utils/Context";

function User() {
  // const params = useParams();
  // const userId = params.id;

  const { toggleId, swithToggleId } = useContext(ThemeContext);
  const userId = toggleId ? "12" : "18";

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [currentUser, setCurrentUser] = useState([]);
  const [currentUserActivity, setCurrentUserActivity] = useState([]);
  const [currentUserPerformance, setCurrentUserPerformance] = useState([]);
  const [currentUserAverageSessions, setCurrentUserAverageSessions] = useState(
    []
  );

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const responseMainData = await fetchUserMainData(userId);
        setCurrentUser(responseMainData);

        const responseActivity = await fetchUserActivity(userId);
        setCurrentUserActivity(responseActivity);

        const responsePerformance = await fetchUserPerformance(userId);
        setCurrentUserPerformance(responsePerformance);

        const responseAverageSessions = await fetchUserAverageSessions(userId);
        setCurrentUserAverageSessions(responseAverageSessions);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [userId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  const currentId = currentUser.map((id) => id.id);

  if (currentId.toString() !== userId) {
    return <Error />;
  } else {
    return (
      <main>
        {currentUser.map(({ id, userInfos, keyData, todayScore, score }) => (
          <div key={id}>
            <section>
              <h1>
                Bonjour <span>{userInfos.firstName}</span>
              </h1>
              <ToggleBtn label="Id" onClick={() => swithToggleId(!toggleId)} />

              <p className="lead">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
              </p>
            </section>
            <div className="main">
              <div className="main__content">
                <div className="main__content-top">
                  <Activity data={currentUserActivity} />
                </div>
                <div className="main__content-bottom">
                  <AverageSessions data={currentUserAverageSessions} />
                  <Performance data={currentUserPerformance} />
                  <Score
                    todayScore={todayScore}
                    score={score}
                    data={currentUser}
                  />
                </div>
              </div>
              <aside className="key-data">
                <ul>
                  <li className="card">
                    <KeyData
                      keyData={keyData.calorieCount}
                      icon={iconEnergy}
                      title="Calories"
                      style="#FBEAEA"
                      unit="kCal"
                    />
                  </li>
                  <li className="card">
                    <KeyData
                      keyData={keyData.proteinCount}
                      icon={iconChicken}
                      title="Proteines"
                      style="#E9F4FB"
                      unit="g"
                    />
                  </li>
                  <li className="card">
                    <KeyData
                      keyData={keyData.carbohydrateCount}
                      icon={iconApple}
                      title="Glucides"
                      style="#FBF6E5"
                      unit="g"
                    />
                  </li>
                  <li className="card">
                    <KeyData
                      keyData={keyData.lipidCount}
                      icon={iconCheeseburger}
                      title="Lipides"
                      style="#FBEAEF"
                      unit="g"
                    />
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        ))}
      </main>
    );
  }
}

export default User;
