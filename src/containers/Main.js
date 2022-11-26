import React, { useEffect, useState } from "react";
import SplashScreen from "./splashScreen/SplashScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Travel from "./travel/Travel";
import "./Main.scss";
import Greeting from "./greeting/Greeting";
import JapaneseSkill from "../components/japaneseSkill/JapaneseSkill";
import WorkExp from "../components/workExp/WorkExp";
import WorkAsk from "../components/workAsk/WorkAsk";
import useLocoScroll from "../hooks/useLocoScroll";

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  
  useEffect(() => {
    const splashTimer = setTimeout(
      () => setIsShowingSplashAnimation(false),
      2000
    );
    return () => {
      clearTimeout(splashTimer);
    };
  }, []);
  useLocoScroll(!isShowingSplashAnimation);
  return (
    <div id="main-container" data-scroll-container>
      {isShowingSplashAnimation ? (
        <SplashScreen />
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Greeting />
                  <JapaneseSkill />
                  {/* <Travel /> */}
                  <WorkExp />
                  <WorkAsk />
                </>
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default Main;
