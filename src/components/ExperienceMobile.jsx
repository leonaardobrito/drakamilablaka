import bg from '../assets/img/autumnMobile.png'
import NavbarMobile from "./NavbarMobile.jsx";
import MidSectionMobile from "./MidSectionMobile.jsx";
import FooterMobile from "./FooterMobile.jsx";
import AboutMobile from "./AboutMobile.jsx";
import ContactMobile from "./ContactMobile.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";


const ExperienceMobile = () => {


    // console.log(ScrollTrigger.isInViewport('.boxes') ? "👀" : "🙈")

    // Define the number of spans you want to render
    const numberOfSpans = 16;

    // Array to hold the JSX elements
    const spans = [];

    // Loop to create span elements
    for (let i = 0; i < numberOfSpans; i++) {
        spans.push(<span key={i}></span>);
    }
    // const styles = {
    //     // backgroundImage: `url(${bg})`,
    //     // backgroundImage: `url(${noise})`,
    //     // backgroundColor: 'rgba(179,42,0,0.18)',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center center',
    //     height: '100vh',
    //     width: '100vw',
    //     position: 'sticky',
    // }
    // useGSAP(() => {
    //     gsap.to(".about-box", {
    //         scale: 100,
    //         duration: 1,
    //
    //         scrollTrigger: {
    //             trigger: '.contact-box',
    //             start: '10% 30%',
    //             // end: () => `+=${document.querySelector(".about-box").offsetHeight}`,
    //             markers: true,
    //             end: '50% 90%',
    //             // scrub: true
    //         }
    //     })
    // })


    return (
        <main
            
            className="main-screen h-screen w-screen bg-fixed bg-center bg-cover"
            style={{backgroundImage: `url(${bg})`}}
        >
            <div className="overflow-y-auto h-[100vh]">
                <NavbarMobile/>
                <MidSectionMobile/>
                <AboutMobile/>
                <ContactMobile />
                <FooterMobile/>
            </div>
            <div>{spans}</div>
        </main>
    );
}

export default ExperienceMobile