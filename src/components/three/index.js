import React, { Component } from 'react'
import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

var scene, camera, renderer, renderScene
const params = {
 exposure: 1,
 bloomStrength: 5,
 bloomThreshold: 0,
 bloomRadius: 0,
 scene: 'Scene with Glow',
}
var materials = {}
var raycaster, mouse
var width, height
var ENTIRE_SCENE, BLOOM_SCENE
var bloomLayer, darkMaterial
var bloomPass, bloomComposer
var finalPass, finalComposer

function vertShader() {
 return `
    varying vec2 vUv;

    void main() {

        vUv = uv;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
    `
}

function fragShader() {
 return `uniform sampler2D baseTexture;
    uniform sampler2D bloomTexture;

    varying vec2 vUv;

    void main() {

        gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );

    }`
}

class Three extends React.Component {
 componentDidMount() {
  raycaster = new THREE.Raycaster()

  mouse = new THREE.Vector2()

  width = this.mount.clientWidth
  height = this.mount.clientHeight / 1.5

  ENTIRE_SCENE = 0
  BLOOM_SCENE = 1

  bloomLayer = new THREE.Layers()
  bloomLayer.set(BLOOM_SCENE)

  darkMaterial = new THREE.MeshBasicMaterial({ color: 'black' })

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(40, width / height, 1, 200)
  camera.position.set(0, 0, 20)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.toneMapping = THREE.ReinhardToneMapping
  this.mount.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.minDistance = 1
  controls.maxDistance = 100
  controls.enableDamping = true
  controls.dampingFactor = 0.1
  //controls.enableZoom = false
  controls.addEventListener('change', this.updateScene)

  //LIGHTS
  var lights = []
  lights[0] = new THREE.AmbientLight(0x404040)
  scene.add(lights[0])

  //Bloom
  renderScene = new RenderPass(scene, camera)

  bloomPass = new UnrealBloomPass(
   new THREE.Vector2(window.innerWidth, window.innerHeight),
   1.5,
   0.4,
   0.85
  )
  bloomPass.threshold = params.bloomThreshold
  bloomPass.strength = params.bloomStrength
  bloomPass.radius = params.bloomRadius

  bloomComposer = new EffectComposer(renderer)
  bloomComposer.renderToScreen = true
  bloomComposer.addPass(renderScene)
  bloomComposer.addPass(bloomPass)

  finalPass = new ShaderPass(
   new THREE.ShaderMaterial({
    uniforms: {
     baseTexture: { value: null },
     bloomTexture: { value: bloomComposer.renderTarget2.texture },
    },
    vertexShader: vertShader(),
    fragmentShader: fragShader(),
    defines: {},
   }),
   'baseTexture'
  )
  finalPass.needsSwap = true

  finalComposer = new EffectComposer(renderer)
  finalComposer.addPass(renderScene)
  finalComposer.addPass(finalPass)

  //Scene with Glow
  bloomComposer.renderToScreen = false

  renderer.toneMappingExposure = Math.pow(params.exposure, 4.0)

  this.setupScene()

  //   renderer.render(scene, camera);
  window.addEventListener('mousemove', this.onPointerDown, false)
  window.addEventListener('resize', this.onWindowResize, false)
 }

 setupScene = () => {
  scene.traverse(this.disposeMaterial)
  scene.children.length = 0

  var textureLoader = new THREE.TextureLoader()

  var texture0 = textureLoader.load('https://res.cloudinary.com/elpawl-llc/image/upload/v1662156689/gfm_hllgaz.png')
  //==============Cube
  let cubeGeometry = new THREE.BoxGeometry(5,5,5);
  let materialArray = [
      new THREE.MeshBasicMaterial( { map: texture0 } ),
      new THREE.MeshBasicMaterial( { map: texture0 } ),
      new THREE.MeshBasicMaterial( { map: texture0 } ),
      new THREE.MeshBasicMaterial( { map: texture0 } ),
      new THREE.MeshBasicMaterial( { map: texture0 } ),
      new THREE.MeshBasicMaterial( { map: texture0 } ),
  ];
  let mesh = new THREE.Mesh( cubeGeometry, materialArray );
  mesh.position.set(0,0,0);
  scene.add(mesh);
  //===========================================================


  //===========Text===========================================
//   const loader = new FontLoader();
//   loader.load( 'helvetiker_regular.typeface.json', function ( font ) {

//       const color = 0x006699;

//       const matDark = new THREE.LineBasicMaterial( {
//           color: color,
//           side: THREE.DoubleSide
//       } );

//       const matLite = new THREE.MeshBasicMaterial( {
//           color: color,
//           transparent: true,
//           opacity: 0.4,
//           side: THREE.DoubleSide
//       } );

//       const message = '   Three.js\nSimple text.';

//       const shapes = font.generateShapes( message, 100 );

//       const geometry = new THREE.ShapeGeometry( shapes );

//       geometry.computeBoundingBox();

//       const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );

//       geometry.translate( xMid, 0, 0 );

//       // make shape ( N.B. edge view not visible )

//       const text = new THREE.Mesh( geometry, matLite );
//       text.position.z = 0;
//       text.layers.enable(BLOOM_SCENE)
//       scene.add( text );


//   } ); //end load function

  //========================================================

  const geometry = new THREE.IcosahedronGeometry(1, 15)

  for (let i = 0; i < 50; i++) {
   const color = new THREE.Color('hsl(197, 88%, 36%)')

   const material = new THREE.MeshBasicMaterial({ color: color })
   const sphere = new THREE.Mesh(geometry, material)
   sphere.position.x = Math.random() * 10 - 5
   sphere.position.y = Math.random() * 10 - 5
   sphere.position.z = Math.random() * 10 - 5
   sphere.position.normalize().multiplyScalar(Math.random() * 10.0 + 10.0)
   sphere.scale.setScalar(Math.random() * Math.random() + 0.5)
   scene.add(sphere)

   if (Math.random() < 0.25) sphere.layers.enable(BLOOM_SCENE)
  }

  this.updateScene()
 }

 disposeMaterial = (obj) => {
  if (obj.material) {
   obj.material.dispose()
  }
 }

 darkenNonBloomed = (obj) => {
  if (obj.isMesh && bloomLayer.test(obj.layers) === false) {
   materials[obj.uuid] = obj.material
   obj.material = darkMaterial
  }
 }

 restoreMaterial = (obj) => {
  if (materials[obj.uuid]) {
   obj.material = materials[obj.uuid]
   delete materials[obj.uuid]
  }
 }

 onPointerDown = (event) => {
  mouse.x = (event.clientX / width) * 2 - 1
  mouse.y = -(event.clientY / height) * 2 + 1

  //   const target = new THREE.Vector2();

  //   target.x = ( 1 - mouse.x ) * 0.15;
  //   target.y = ( mouse.y ) * 0.15;

  //   camera.rotation.x += 0.05 * ( target.y - camera.rotation.x );
  //   camera.rotation.y += 0.05 * ( target.x - camera.rotation.y );

//   raycaster.setFromCamera(mouse, camera)
//   const intersects = raycaster.intersectObjects(scene.children, false)
//   if (intersects.length > 0) {
//    const object = intersects[0].object
//    object.layers.toggle(BLOOM_SCENE)
//   }
  this.updateScene()
 }

 onWindowResize = () => {
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
  bloomComposer.setSize(width, height)
  finalComposer.setSize(width, height)
  this.updateScene()
 }

 componentWillUnmount() {
  this.mount.removeChild(renderer.domElement)
 }

 updateScene = () => {
  scene.traverse(this.darkenNonBloomed)
  bloomComposer.render()
  scene.traverse(this.restoreMaterial)
  finalComposer.render()
 }

 render() {
  return (
   <div
    style={{
     position: 'absolute',
     width: this.props.widthC,
     height: this.props.heightC,
     zIndex: -1,
    }}
    ref={(mount) => {
     this.mount = mount
    }}
   />
  )
 }
}
export default Three
