import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls, Html } from "@react-three/drei";
import Scene from "../public/Scene";
import Experience from "./Experience";
import './App.css';
const LogoSprite = () => (
  <Html wrapperClass="logo">
    <div style={{ zIndex: '1' }}>
      <img src="/public/logoK.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
    </div>
  </Html>
);
function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <Canvas style={{ width: '100vw', height: '100vh' }}>
          {/* <LogoSprite /> */}
          {/* <Html wrapperClass="logo" position={[-5,4,0]}>

          Oiasddasdsadadasdasdasdasdasdaasdadasdadadadasd
        </Html> */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={0.3} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            rotateSpeed={0.435}
          />
          {/* <ScrollControls pages={2}> */}
          {/* <Experience /> */}
          <Scene />
          {/* </ScrollControls> */}
          <mesh visible scale={100} >
            <Html

              wrapperClass="logo"
              center
            >
              <div style={{ zIndex: '1' }}>
                <img src="/public/logoK.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
              </div>
            </Html>
          </mesh>
          <mesh position={[0, 0, 0]} scale={100} >
            <Html

              wrapperClass="label"
              center
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.👍
            </Html>
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}

export default App;