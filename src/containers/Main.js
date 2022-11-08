import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import SplashScreen from "./splashScreen/SplashScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Travel from "./travel/Travel";
import "./Main.scss";
import Greeting from "./greeting/Greeting";
import JapaneseSkill from "../components/japaneseSkill/JapaneseSkill";
import WorkExp from "../components/workExp/WorkExp";
import useLocoScroll from "../hooks/useLocoScroll";

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  useLocoScroll(!isShowingSplashAnimation);
  useEffect(() => {
    const splashTimer = setTimeout(
      () => setIsShowingSplashAnimation(false),
      2000
    );
    return () => {
      clearTimeout(splashTimer);
    };
  }, []);
  return (
    <div id="main-container" data-scroll-section>
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
                  <Travel />
                  <WorkExp />
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
