/* eslint-disable react/prop-types */
import arrow from "../../assets/arrow.svg";
import "./PlayButton.css";

const PlayButton = ({children, color, size}) => {
  const fontSize = size || 30;
  return (
    <div className="wrapper">
      <span style={{fontSize: `${fontSize}px`, background: `${color === "primary" ? "#35155D" : "#212A3E"}`}} className="cta">
        <span>{children}</span>
        <span>
          <img className="play-button-img" src={arrow} />
        </span>
      </span>
    </div>
  );
};

export default PlayButton;
