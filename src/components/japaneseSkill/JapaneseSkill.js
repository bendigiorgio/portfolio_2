import { useEffect } from "react";
import { gsap } from "gsap";
import "./JapaneseSkill.scss";

export default function JapaneseSkill() {
  useEffect(() => {
    const hero = document.querySelector("[data-hero]");

    window.addEventListener("mousemove", (e) => {
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);

      gsap.to(hero, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.3,
        ease: "sine.out",
      });
    });
  }, []);
  return (
    <div className="wrapper" data-scroll-section>
      <div className="hero">
        <h1 className="text eng">I love learning new languages and how it opens up the world.<br/>I have been learning Japanese since 7th grade and can’t imagine my life without it.</h1>
      </div>
      <div className="hero jp" aria-hidden="true" data-hero>
        <h1 className="text">言語を学んで、自分の世界を広げるのが大好きです。<br/>中学校1年生から日本語を勉強し、日本語を勉強しなかった人生が想像出来ません</h1>
      </div>
    </div>
  );
}
