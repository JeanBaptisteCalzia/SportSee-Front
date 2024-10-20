import React from "react";
import { useParams } from "react-router-dom";
import { userMainData } from "../../datas/dataMocked";
import Error from "../../components/Error";
import KeyData from "../../components/KeyData";
import Score from "../../components/Score";
import iconEnergy from "../../assets/icon/energy.svg";
import iconChicken from "../../assets/icon/chicken.svg";
import iconApple from "../../assets/icon/apple.svg";
import iconCheeseburger from "../../assets/icon/cheeseburger.svg";

function User() {
  const params = useParams();
  const userId = params.id;

  const currentUser =
    userMainData && userMainData.filter((user) => user.id === parseInt(userId));

  const currentId = currentUser.map((id) => id.id);

  if (parseInt(currentId) !== parseInt(userId)) {
    return <Error />;
  } else {
    return (
      <main>
        {currentUser.map(({ id, userInfos, keyData, todayScore }) => (
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
                <Score todayScore={todayScore} data={currentUser} />
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
