import * as THREE from 'three';

const scene = new THREE.Scene()

const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"}) 

// Pass two objects in the mesh and generate
const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)

// Add our cubeMesh to the scene
scene.add(cubeMesh)

// to view our scene we will need to add a Camera
// initalize the Camera
// select Perspective Camera
// first parameter is the field of view: 75
// second parameter the aspect ratio: window.innerWidth/window.innerHeight
// third param camera near property anything lower than this you can't see
// fourth param camera far property anything farther you can't see
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth/window.innerHeight,
  0.1,
  30)

camera.position.z = 5

// initialize the renderer (this displays the 3d content)
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGL1Renderer({
  canvas:canvas
})
renderer.setSize(500,500)
renderer.render(scene, camera)
