import React, {useEffect, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";
import SplashScreen from "./splashScreen/SplashScreen";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Travel from "./travel/Travel" 
import "./Main.scss"
import Greeting from "./greeting/Greeting";


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




  return (
    <div id="background">
        {isShowingSplashAnimation  ? (
          <SplashScreen />
        ) : (
          <Router>
            <Routes>
            <Route
              path="/"
              element={(
                <>
                  <Greeting />
                  <Travel />
                </>
              )}
             />
            </Routes>
          </Router>
        )}
    </div>
  );
};

export default Main;
