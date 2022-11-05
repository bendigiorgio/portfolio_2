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
        <h1 id="text eng">Hey there!</h1>
      </div>
      <div className="hero jp" aria-hidden="true" data-hero>
        <h1 id="">こんにちは！</h1>
      </div>
    </div>
  );
}
