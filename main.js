import "./style.css"
import express from "express";
const app=express();
const port = process.env.PORT || 3000;
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

let __dirname = path.dirname(__filename);
app.get("/", (req,res)=>{

    res.sendFile(__dirname+"/index.html");
});

app.listen(process.env.PORT || port, ()=> console.log(`Listening port ${port}`));


import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75 , window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer= new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

renderer.render(scene, camera);
const moonTexture = new THREE.TextureLoader().load("moon.jpg");
const geometry = new THREE.SphereGeometry(5, 32,32);
const material = new THREE.MeshStandardMaterial( {map: moonTexture} );
const moon = new THREE.Mesh(geometry, material);
moon.position.set(-175,50,-125);

scene.add(moon);

const earthTexture = new THREE.TextureLoader().load("earth.jpg");
const earth_geometry = new THREE.SphereGeometry(100, 32,32);
const earth_material = new THREE.MeshStandardMaterial( {map: earthTexture} );
const earth = new THREE.Mesh(earth_geometry, earth_material);
earth.position.set(-50,0,-175);

scene.add(earth);

const sunTexture = new THREE.TextureLoader().load("sun.jpg");
const sun_geometry = new THREE.SphereGeometry(15, 32,32);
const sun_material = new THREE.MeshStandardMaterial( {map: sunTexture} );
const sun = new THREE.Mesh(sun_geometry, sun_material);
sun.position.set(300,175,-350);

scene.add(sun);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(150,80,-100);
scene.add(pointLight);


const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper);



const controls = new OrbitControls(camera, renderer.domElement);

const cometBackground = new THREE.TextureLoader().load("comet.jpg");
function addStar(){
  const geometry = new THREE.SphereGeometry(0.50, 5, 5);
  const material = new THREE.MeshStandardMaterial( { map: cometBackground });
  const star = new THREE.Mesh(geometry, material);
  const [x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100));
  star.position.set(x,y,z);
  scene.add(star);

}

Array(200).fill().forEach(addStar);

const spaceBackground = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceBackground;

function animate(){
  requestAnimationFrame( animate );
  renderer.render(scene, camera);
  moon.rotation.y-=0.005;
  moon.rotation.x-=0.002;
  moon.rotation.z-=0.0002;
  controls.update();
  
  earth.rotation.y+=0.0005;
  sun.rotation.y-=0.007;
  
}


function move(){
  

    camera.position.x-=0.02;
    camera.position.y-=0.02;
    camera.position.z+=0.08; 
}
camera.position.z=4;

animate();

document.body.onscroll = move;
move();