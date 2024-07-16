import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience.jsx";
import './App.css';
import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";
import { ScrollControls } from "@react-three/drei";
import FlyState from './FlyRefactored.json';
import ContactForm from "./components/ContactForm.jsx";
import ExperienceMobile from "./components/ExperienceMobile.jsx";
import { FaWhatsapp } from "react-icons/fa";
import logoK from './assets/logoK.svg'

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Set the breakpoint according to your design
        };

        window.addEventListener('resize', handleResize);

        // Initial check for mobile on component mount
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleWhatsAppClick = () => {
        const phoneNumber = "+5547991054009";
        // Open WhatsApp chat with the specified phone number
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    };

    // Theatre production
    const sheet = getProject('Fly Through 2', { state: FlyState }).sheet('Experience');

    return (
        <>
            {!isMobile ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <div className="logo" style={{ position: 'fixed', top: '10px', left: '10px', zIndex: '10' }}>
                        <img src={logoK}  alt="Logo" style={{ width: '90px', height: 'auto' }} />
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
                className="rounded-full h-14 w-14 bg-green-600 border-none cursor-pointer flex items-center justify-center"
            >
                <FaWhatsapp className="text-white scale-150"/>
            </button>
                    </div>
                    <ContactForm />
                    <Canvas gl={{ preserveDrawingBuffer: true }} style={{ width: '100vw', height: '100vh' }}>
                        <ScrollControls pages={2} damping={0.5} horizontal maxSpeed={0.8}>
                            <SheetProvider sheet={sheet}>
                                <Experience />
                            </SheetProvider>
                        </ScrollControls>
                    </Canvas>
                </div>
            ) : (
                <ExperienceMobile />
            )}
        </>
    );
}

export default App;
