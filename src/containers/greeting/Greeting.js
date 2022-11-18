import "./Greeting.scss"
import WaveSvg from "../../components/waveSvg/WaveSvg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect} from "react";

export default function Greeting(){
    useEffect(() => {
        var action = gsap.timeline({
            defaults:{ ease:'none'},
            scrollTrigger: {
              trigger: ".panel",
              scroller: "#main-container",
              scrub:0.3,
              start: "top top",
              end: "+=80%"
            }
          })
          .set('.bg, .rwv-3, .rwv-2, .rwv-1, .blwv', {transformOrigin: "bottom center"})
          .to('.rwv-3, .rwv-2, .rwv-1, .blwv', {scaleY:0, duration:2, stagger:0.3})
      }, []);
    
    return(
        <>
        <section className="welcome-container" data-scroll-section>
            <div className="panel">
                <div id="bg-image">
                    <WaveSvg />
                </div>
                <div id="heading-text">

                        <h1 id="header-title">Ben Di Giorgio</h1>
                        <p id="sub-text">Take a look into my life</p>
                </div>
                <div className="cover-up"></div>
            </div>

                
        </section>
        </>
    );

}