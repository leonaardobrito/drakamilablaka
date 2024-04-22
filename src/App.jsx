import React from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls, ScrollControls, Html } from "@react-three/drei";
// import Scene from "../public/Scene";
import { Experience } from "./components/Experience";
import './App.css';
import {getProject, val} from "@theatre/core";
import {SheetProvider} from "@theatre/r3f";
import {ScrollControls} from "@react-three/drei";
import CameraPositionLogger from "./components/CameraPositionLogger";

function App() {

    // Theatre
    const  sheet = getProject('Fly Through 2').sheet('Experience')

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="logo" style={{ position: 'fixed', top: '10px', left: '10px', zIndex: '10' }}>
                <img src="/logoK.png" alt="Logo" style={{ width: '90px', height: 'auto' }} />
            </div>
            {/* preserveDrawingBuffer: take snapshots to animate and preserve the drawing buffer  */}
            <Canvas gl={{ preserveDrawingBuffer: true }} style={{ width: '100vw', height: '100vh' }}>
                <CameraPositionLogger event='mousedown' />
                <ScrollControls pages={5} infinite horizontal maxSpeed={10}>
                    <SheetProvider sheet={sheet}>
                        <Experience />
                    </SheetProvider>
                </ScrollControls>
            </Canvas>
        </div>
    );
}

export default App;
