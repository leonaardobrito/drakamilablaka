import React, {useRef} from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import './App.css';
import {getProject, val} from "@theatre/core";
import {SheetProvider} from "@theatre/r3f";
import {ScrollControls, OrbitControls} from "@react-three/drei";
import { FaWhatsapp } from "react-icons/fa";
import FlyState from './assets/FlyComplete2.json'
import Scene from "./components/Scene";
import ContactForm from "./components/ContactForm.jsx";

function App() {

    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        };
        // Send formData to the desired email address
        console.log(formData);
        // Optionally, you can use Axios or Fetch API to send a POST request to a backend endpoint
    };


    const handleWhatsAppClick = () => {
        const phoneNumber = "+5547991054009";
        // Open WhatsApp chat with the specified phone number
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    };
    // Theatre
    // const  sheet = getProject('Fly Through 2').sheet('Experience')
    // Theatre production
    const  sheet = getProject('Fly Through 2', {state: FlyState}).sheet('Experience')
    if (window.innerWidth > 768) {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div className="logo" style={{position: 'fixed', top: '10px', left: '10px', zIndex: '10'}}>
                    <img src="/logoK.png" alt="Logo" style={{width: '90px', height: 'auto'}}/>
                </div>
                <div
                    style={{
                        position: "fixed",
                        bottom: "25px",
                        right: "25px",
                        zIndex: "1000",
                        color: "white"
                    }}
                >
                    <button
                        onClick={handleWhatsAppClick}
                        style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            backgroundColor: "#25d366",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        <FaWhatsapp style={{color: "white", fontSize: "24px"}}/>
                    </button>
                </div>

                <ContactForm />

                {/* preserveDrawingBuffer: take snapshots to animate and preserve the drawing buffer  */}
                <Canvas gl={{preserveDrawingBuffer: true}} style={{width: '100vw', height: '100vh'}}>
                    {/*<CameraPositionLogger event='mousedown'/>*/}
                    <ScrollControls pages={5} damping horizontal  maxSpeed={1}>
                        <SheetProvider sheet={sheet}>
                            <Experience/>
                        </SheetProvider>
                    </ScrollControls>
                </Canvas>

            </div>
        );
    } else {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div className="logo" style={{position: 'fixed', top: '10px', left: '10px', zIndex: '10'}}>
                    <img src="/logoK.png" alt="Logo" style={{width: '90px', height: 'auto'}}/>
                </div>
                <div
                    style={{
                        position: "fixed",
                        bottom: "25px",
                        right: "25px",
                        zIndex: "1000",
                        color: "white"
                    }}
                >
                    <button
                        onClick={handleWhatsAppClick}
                        style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            backgroundColor: "#25d366",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        <FaWhatsapp style={{color: "white", fontSize: "24px"}}/>
                    </button>
                </div>
                <Canvas style={{width: '100vw', height: '100vh'}}>
                    <ambientLight intensity={0.5}/>
                    <directionalLight position={[10, 10, 5]} intensity={0.3}/>
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={true}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                        rotateSpeed={0.435}
                    />
                    <ScrollControls pages={3}>
                        <Scene/>
                    </ScrollControls>
                </Canvas>
            </div>
        )
    }
}

export default App;
