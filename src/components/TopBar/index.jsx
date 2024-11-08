import ToggleBtn from "../../components/ToggleBtn";
import { useContext } from "react";
import { ApiContext, UserContext } from "../../utils/Context";

import "./topBar.scss";

/**
 * Render Sidebar with secondary navigation and copyright
 * @return { JSX.Element }
 */

function TopBar() {
  const { data, setData } = useContext(ApiContext);
  const { userId, initUserIdInContext, swithUserId } = useContext(UserContext);

  return (
    <section className="top-bar">
      <ToggleBtn id="api" label="Datas" onClick={() => setData(!data)} />
      <ToggleBtn id="id" label="Id" onClick={() => swithUserId()} />
    </section>
  );
}

export default TopBar;