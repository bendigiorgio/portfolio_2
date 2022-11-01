import React, {useContext} from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import splashAnimation from "../../assets/lottie/splashAnimation";

export default function SplashScreen() {
  return (
    <div className={"splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashAnimation} />
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{"greeting.username"}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}
