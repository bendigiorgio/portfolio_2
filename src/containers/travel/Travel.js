//import TravelGlobe from "../../components/travelGlobe/TravelGlobe";
import {useEffect} from 'react';
import * as THREE from 'three';
import "./Travel.scss";

export default function Travel() {
    
    useEffect(() => {
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('globeCanvas'),
        });
        
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(40);

        const globeTexture = new THREE.TextureLoader().load(
            // resource URL
            'earthFlat.jpg')

        //Geometry

        const geometry = new THREE.SphereGeometry( 15, 60, 25 );
        const material = new THREE.MeshBasicMaterial({
            map: globeTexture
        });
        const globe = new THREE.Mesh(geometry, material);

        //scene.background = globeTexture;

        scene.add(globe);

        function animate() {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
        }

        animate();
        
    }, [] );
return(
    <div>
        <p>Hi</p>
        <canvas id = 'globeCanvas'/>
        
    </div>
)

}

