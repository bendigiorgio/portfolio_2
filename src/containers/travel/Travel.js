//import TravelGlobe from "../../components/travelGlobe/TravelGlobe";
import { useEffect } from "react";
import * as THREE from "three";
import "./Travel.scss";


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
  }, []);
  return (
    <div data-scroll-section>
      <canvas id="globeCanvas" />
    </div>
  );
}
