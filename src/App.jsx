import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import './App.css';
import { getProject, val } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";
import { ScrollControls } from "@react-three/drei";
import FlyState from './FlyRefactored.json'
import ContactForm from "./components/ContactForm.jsx";
import ExperienceMobile from "./components/ExperienceMobile.jsx";
import { FaWhatsapp } from "react-icons/fa";

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
    // Theatre
    // const  sheet = getProject('Fly Through 2').sheet('Experience')
    // Theatre production
    const sheet = getProject('Fly Through 2', { state: FlyState }).sheet('Experience')
    return (
        <>
            {/*{!isMobile ? (*/}
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                   <div className="logo" style={{ position: 'fixed', top: '10px', left: '10px', zIndex: '10' }}>
                       <img src="/logoK.png" alt="Logo" style={{ width: '90px', height: 'auto' }} />
                   </div>
            {/*        <div*/}
            {/*            style={{*/}
            {/*                position: "fixed",*/}
            {/*                bottom: "25px",*/}
            {/*                right: "25px",*/}
            {/*                zIndex: "1000",*/}
            {/*                color: "white"*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <button*/}
            {/*                onClick={handleWhatsAppClick}*/}
            {/*                style={{*/}
            {/*                    width: "50px",*/}
            {/*                    height: "50px",*/}
            {/*                    borderRadius: "50%",*/}
            {/*                    backgroundColor: "#25d366",*/}
            {/*                    border: "none",*/}
            {/*                    cursor: "pointer",*/}
            {/*                }}*/}
            {/*            >*/}
            {/*                <FaWhatsapp style={{ color: "white", fontSize: "24px" }} />*/}
            {/*            </button>*/}
            {/*        </div>*/}

                    <ContactForm />

                     <Canvas gl={{ preserveDrawingBuffer: true }} style={{ width: '100vw', height: '100vh' }}>
                {/* </Canvas>      */}
                       <ScrollControls pages={2} damping={0.5} horizontal maxSpeed={0.8}>
                       <SheetProvider sheet={sheet}>
                               <Experience />
                           </SheetProvider>
                       </ScrollControls>
                   </Canvas>

                </div> 
           {/* )  */}
          {/*   : (*/}
            {/*    <ExperienceMobile />*/}
            {/*)}*/}
            {/* <ExperienceMobile /> */}
        </>
    );

}

export default App;
