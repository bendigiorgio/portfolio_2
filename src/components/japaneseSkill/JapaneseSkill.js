import React, { useCallback, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./JapaneseSkill.scss";

export default function JapaneseSkill() {
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const hero = document.querySelector("[data-hero]");
  const fadeIn = () => gsap.to(hero, {'--s': '50rem', duration: 1, ease: 'back.out(2)'});
  const fadeOut = () => gsap.to(hero, {'--s': '0rem', duration: 0.5, ease: 'power1'});
  
  const  handleMove = useCallback((event) => {
    const x = Math.round((event.clientX / window.innerWidth) * 100);
    const y = Math.round((event.clientY / window.innerHeight) * 100);

    gsap.to(hero, {
      "--x": `${x}%`,
      "--y": `${y}%`,
      duration: 0.3,
      ease: "sine.out",
    });
  },[isFirstLoad]);

  useEffect(() => {
    setIsFirstLoad(false);
    {isMouseIn ? (fadeIn()) : (fadeOut())}
    {isMouseIn ? (window.addEventListener("mousemove", handleMove)
    ) : (window.removeEventListener("mousemove", handleMove))}
  }, [isMouseIn]);

  return (
    <div className="language-wrapper langsec" 
    onMouseEnter={() => setIsMouseIn(true)}
    onMouseLeave={() => setIsMouseIn(false)} >
      <div className="hero">
        <h1 className="text eng">I love learning new languages and how it opens up the world.<br/>I have been learning Japanese since 7th grade and can’t imagine my life without it.</h1>
      </div>
      <div className="hero jp" aria-hidden="true" data-hero>
        <h1 className="text">言語を学んで、自分の世界を広げるのが大好きです。<br/>中学校1年生から日本語を勉強し、日本語を勉強しなかった人生が想像出来ません</h1>
      </div>
    </div>
  );
}
