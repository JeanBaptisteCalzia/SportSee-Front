import "./loader.scss";

/**
 * Render Loader while data is loading
 * @return { JSX.Element }
 */

function Loader() {
  return (
    <div className="loader">
      <span className="spinner"></span>
    </div>
  );
}

export default Loader;
