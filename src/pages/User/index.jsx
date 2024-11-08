import { useParams } from "react-router-dom";
import TopBar from "../../components/TopBar/";
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
import Loader from "../../components/Loader";
import { fetchUserMainData } from "../../utils/api";
import { fetchUserActivity } from "../../utils/api";
import { fetchUserPerformance } from "../../utils/api";
import { fetchUserAverageSessions } from "../../utils/api";
import { useEffect, useState, useContext } from "react";
import { ApiContext, UserContext } from "../../utils/Context";

/**
 * Render User page
 * @return { JSX.Element }
 */

function User() {
  const params = useParams();
  const idInUrl = params.id;

  const { data } = useContext(ApiContext);
  const { userId, initUserIdInContext } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [currentUser, setCurrentUser] = useState([]);
  const [currentUserActivity, setCurrentUserActivity] = useState([]);
  const [currentUserPerformance, setCurrentUserPerformance] = useState([]);
  const [currentUserAverageSessions, setCurrentUserAverageSessions] = useState(
    []
  );

  useEffect(() => {
    initUserIdInContext(idInUrl);

    setIsLoading(true);
    // Fetch data from Api or mocked data
    async function fetchData() {
      try {
        const responseMainData = await fetchUserMainData(userId, data);
        setCurrentUser(responseMainData);

        const responseActivity = await fetchUserActivity(userId, data);
        setCurrentUserActivity(responseActivity);

        const responsePerformance = await fetchUserPerformance(userId, data);
        setCurrentUserPerformance(responsePerformance);

        const responseAverageSessions = await fetchUserAverageSessions(
          userId,
          data
        );
        setCurrentUserAverageSessions(responseAverageSessions);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [userId, data]);

  // If the data is loading display a loader
  if (isLoading) {
    return <Loader />;
  }

  // If the data from Api and mocked data returns error display an error message
  if (error) {
    return <Error />;
  }

  return (
    <>
      <TopBar />
      <main>
        {currentUser.map(({ id, userInfos, keyData, todayScore, score }) => (
          <div key={id}>
            <section>
              <h1>
                Bonjour <span>{userInfos.firstName}</span>
              </h1>
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
    </>
  );
}

export default User;
