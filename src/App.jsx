import React from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls, ScrollControls, Html } from "@react-three/drei";
// import Scene from "../public/Scene";
import { Experience } from "./components/Experience";
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="logo" style={{ position: 'fixed', top: '10px', left: '10px', zIndex: '10' }}>
        <img src="/logoK.png" alt="Logo" style={{ width: '90px', height: 'auto' }} />
      </div>
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <Experience />
      {/* <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.3} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          rotateSpeed={0.435}
        />
        <ScrollControls pages={2} horizontal infinite>
          <Suspense fallback={null}>

            <Scene />
          </Suspense>
        </ScrollControls>

        <mesh position={[980, 150, 10]} scale={100} >
          <Html

            wrapperClass="label"
            center
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.👍
          </Html>
        </mesh>

        <mesh position={[-20, 30, 100]} scale={100} >
          <Html

            wrapperClass="label"
            center
          >
            <p>

              Lorem Ips standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.👍
            </p>
          </Html>
        </mesh>
        <mesh position={[-970, 190, -100]} scale={100} >
          <Html

            wrapperClass="label"
            center
          >
            dsdsdsLorem Ips standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.👍
          </Html>
        </mesh> */}
      </Canvas>
    </div>
  );
}

export default App;
