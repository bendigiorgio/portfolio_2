//import TravelGlobe from "../../components/travelGlobe/TravelGlobe";
import { useEffect } from "react";
import * as THREE from "three";
import "./Travel.scss";
import { gsap } from "gsap";

export default function Travel() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("globeCanvas"), alpha: true ,
    });
    const segmentCanvas = renderer.domElement;
    const camera = new THREE.PerspectiveCamera(
      75,
      segmentCanvas.clientWidth / segmentCanvas.clientHeight,
      0.1,
      1000
    );

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(segmentCanvas.clientWidth, segmentCanvas.clientHeight);

    camera.position.setZ(60);

    const globeTexture = new THREE.TextureLoader().load(
      // resource URL
      "earthFlat.jpg"
    );
    //Geometry

    const geometry = new THREE.SphereGeometry(15, 60, 25);
    const material = new THREE.MeshBasicMaterial({
      map: globeTexture,
    });
    const globe = new THREE.Mesh(geometry, material);

    //scene.background = globeTexture;

    scene.add(globe);

    function animate() {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    }

    animate();

    // var action = gsap.timeline({
    //   defaults:{ ease:'none'},
    //   scrollTrigger: {
    //     trigger: ".globeWrapper",
    //     pin:true,
    //     scroller: "#main-container",
    //     scrub:0.3,
    //     start: "top top",
    //     end: "+=100%"
    //   }
    // })
    // // .to('.rwv-3, .rwv-2, .rwv-1, .blwv', {scaleY:0, duration:2, stagger:0.4})
  }, []);
  return (
    <div className='travel-wrapper' data-scroll-section>
      <h2 className="title">Where I'm From</h2>
    <div className='globeWrapper' >
      <canvas id="globeCanvas" />
    </div>
    </div>
  );
}
