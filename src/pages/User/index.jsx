import React from "react";
import { useParams } from "react-router-dom";
import { userMainData } from "../../datas/dataMocked";
import { userPerformance } from "../../datas/dataMocked";
import { userAverageSessions } from "../../datas/dataMocked";
import { userActivity } from "../../datas/dataMocked";
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

function User() {
  const params = useParams();
  const userId = params.id;

  // Main chart
  const currentUser =
    userMainData && userMainData.filter((user) => user.id === parseInt(userId));
  const currentId = currentUser.map((id) => id.id);

  // Performance chart
  const currentUserPerformance =
    userPerformance &&
    userPerformance.filter((user) => user.userId === parseInt(userId));

  // Average Sessions chart
  const currentUserAverageSessions =
    userAverageSessions &&
    userAverageSessions.filter((user) => user.userId === parseInt(userId));

  // Activity chart
  const currentUserActivity =
    userActivity &&
    userActivity.filter((user) => user.userId === parseInt(userId));

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
