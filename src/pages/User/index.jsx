import React from "react";
import { useParams } from "react-router-dom";
import { userMainData } from "../../datas/dataMocked";
import Error from "../../components/Error";
import * as d3 from "d3";

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
        {currentUser.map(({ id, userInfos }) => (
          <section key={id}>
            <h1>
              Bonjour <span>{userInfos.firstName}</span>
            </h1>
            <p className="lead">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </section>
        ))}
      </main>
    );
  }
}

export default User;
