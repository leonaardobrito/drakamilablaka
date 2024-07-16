import {OrbitControls, Text, useScroll, Html } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import React, {useEffect, useRef} from "react";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { val } from "@theatre/core";
import { Bloom } from '@react-three/postprocessing'
import Autumn from "./Autumn.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import CustomMeshWithText from "./CustomMeshWithText.jsx";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin,TextPlugin);

export const Experience = () => {
    const { camera } = useThree()
    const scroll = useScroll()
    const scrollRef = useRef(0);
    //Theatre
    const sheet = useCurrentSheet()

    // useEffect(() => {
    //     const sequenceLength = val(sheet.sequence.pointer.length);
    //     let scrollRef = 0; // Initial scroll reference
    //
    //     const handleWheel = (event) => {
    //         // Prevent default behavior to disable scrolling
    //         event.preventDefault();
    //         // Calculate the new scroll position based on the wheel event
    //         const delta = event.deltaY < 0 ? -0.05 : 0.05; // Change the step size if needed
    //         const newScrollPosition = scrollRef + delta;
    //         // Calculate damping
    //         const damping = 0.8; // Adjust damping factor as needed (e.g., between 0 and 1)
    //         const dampedScrollPosition = scrollRef + (newScrollPosition - scrollRef) * damping;
    //         // Update the scroll position within the range [0, sequenceLength - 1]
    //         const clampedScrollPosition = Math.max(0, Math.min(dampedScrollPosition, sequenceLength - 1));
    //         // Update the sheet sequence position
    //         sheet.sequence.position = clampedScrollPosition;
    //         // Reset the scroll position if it exceeds the sequence length
    //         if (clampedScrollPosition >= sequenceLength - 1) {
    //             scrollRef = 0;
    //             // Reset the camera position if needed
    //             camera.position.set(0, 0, 42); // Update with your initial camera position
    //         } else {
    //             // Update the scroll reference
    //             scrollRef = clampedScrollPosition;
    //         }
    //     };
    //
    //     window.addEventListener("wheel", handleWheel);
    //
    //     return () => {
    //         window.removeEventListener("wheel", handleWheel);
    //     };
    // }, [sheet, camera]);

    const qualificationsRef = useRef();
    const aboutRef = useRef();
    const HeroRef = useRef();

    useFrame(() => {

        if (camera.position.x >= -7 && camera.position.x <= -5 && camera.position.z >= 16 && camera.position.z <= 61) {
            gsap.to(qualificationsRef.current.scale, {
                x: 1,
                y: 1,
                z: 1,
                duration: 1
            });
        } else {
            gsap.to(qualificationsRef.current.scale, {
                x: 0,
                y: 0,
                z: 0,
                ease: "expo.out",
                // transform: "scale(1.5)",
                duration: 1
            });
        }

        if (camera.position.x <= -85 && camera.position.x >= -108 && camera.position.z >= -12 && camera.position.z <= 9) {
            gsap.to(aboutRef.current.scale, {
                x: 1,
                y: 1,
                z: 1,
                duration: 1
            });
        } else {
            gsap.to(aboutRef.current.scale, {
                x: 0,
                y: 0,
                z: 0,
                ease: "expo.out",
                duration: 1
            });
        }

        const formulario = document.getElementsByClassName("formulario");
        if (camera.position.x <= -4 && camera.position.x >= -16 && camera.position.z >= -13 && camera.position.z <= -11) {
            console.log("Call form here");
            if (formulario) {
                gsap.to(formulario, {
                    scale: 1,
                    duration: 1 // Adjust the duration as needed
                })
            }
        } else {
            gsap.to(formulario, {
                scale: 0,
                duration: 1 // Adjust the duration as needed
            })
        }

        // Theatre mode
        const sequenceLength = val(sheet.sequence.pointer.length)
        // const scrollPosition = scrollRef.current

        // console.log("scroll:", sequenceLength, "cruent:  ", sheet.sequence.position)

        // if (scrollPosition >= sequenceLength -1) {
        //     sheet.sequence.position = 0;
        //     scrollRef.current = 0;
        // } else {
        //     scrollRef.current = sheet.sequence.position
        // }
        // update the position of the playhead in the sequence, as a fraction of its whole length
        // if (sheet.sequence.position > 9.99) {
        //     sheet.sequence.position = 0.1
        // } else {
            sheet.sequence.position = scroll.offset * sequenceLength
        // }
    })


    // if (window.innerWidth > 768) {
    return (
        <>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[10, 10, 5]} intensity={0.3}/>
            <OrbitControls
                enableZoom={false}
                enablePan={true}
                enableRotate={true}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                // rotateSpeed={1}
            />
            <Autumn/>
            <PerspectiveCamera
                theatreKey='Camera'
                makeDefault
                position={[0, 0, 42]}
                fov={88}
                near={0.1}
                far={1000}/>
            {/* HERO */}
            <Text
                font={"fonts/Montserrat-Medium.ttf"}
                ref={HeroRef}
                position-x={-9.9}
                position-y={3.2}
                position-z={58.2}
                lineHeight={1.2}
                textAlign="center"
                scale={0.50}
            >
                Olhar a floresta além da árvore {'\n'}

                <meshBasicMaterial color="#0F3F0B"/>
                {/* <meshBasicMaterial color="#4D2A04"/> */}
            </Text>
            <Text
                // font={"fonts/Montserrat-Medium.ttf"}
                font={"fonts/morgenlicht.ttf"}
                ref={HeroRef}
                position-x={-10.2}
                position-y={1.6}
                position-z={58.2}
                lineHeight={1.2}
                textAlign="center"
                scale={0.99}
            >
                Ver você além {'\n'}      dos seus exames
                <meshBasicMaterial color="#0F3F0B"/>

                {/* <meshBasicMaterial color="#703B02"/> */}
                {/* <meshBasicMaterial color="#1F4A22"/> */}
                
            </Text>
            {/* QUALIFICATIONS */}
            <group ref={qualificationsRef} scale={[1, 1, 1]}>
                <CustomMeshWithText
                    meshPosition={[-10, 0, -1]}
                    meshRotation={[0, 6.7, 0]}
                    boxDimensions={[10, 6, 0.10]}
                    textPosition={[0, 0, 0.1]}
                    textScale={0.9}
                    lineHeight={0.8}
                    textContent={`Médica pela UFSC${"\n\n"}`}
                    complement={'CRM 33050-SC'}
                />
                <CustomMeshWithText
                    meshPosition={[5, 0, 2.5]}
                    meshRotation={[0, -6.8, 0]}
                    boxDimensions={[15, 6, 0.15]}
                    textPosition={[0, 0, 0.1]}
                    textScale={0.75}
                    lineHeight={1.2}
                    textContent={` Pós-graduada em Dor pelo ${"\n"} Instituto Israelita Albert Einstein`}
                />
                {/*<CustomMeshWithText*/}
                {/*    // meshPosition={[45, 0, -5]}*/}
                {/*    meshPosition={[35, 0, -80]}*/}
                {/*    meshRotation={[0, -7.4, 0]}*/}
                {/*    boxDimensions={[19, 6, 0.15]}*/}
                {/*    textPosition={[0, 0, 0.1]}*/}
                {/*    textScale={0.75}*/}
                {/*    lineHeight={1.2}*/}
                {/*    textContent={`Foco em pacientes com dor aguda ou crônica, ${"\n"} sem deixar de olhar o todo`}*/}
                {/*/>*/}
            </group>
            {/* ABOUT */}
            <group ref={aboutRef} scale={0}>
                <CustomMeshWithText
                    meshPosition={[80, -2, -15]}
                    meshRotation={[0, 4.62, 0]}
                    boxDimensions={[82, 74, 0.15]}
                    textPosition={[0.8, -1.2, 2]}
                    lineHeight={1.6}
                    textAlign="justify"
                    textScale={1.57}
                    headText={'Quem sou eu'}
                    textContent={`
O desejo de me tornar médica vem desde criança, e ao longo da minha formação me vi 
apaixonada por tudo o que se relaciona com a medicina - anamnese e comunicação, 
os exames complementares e tratamentos. ${'\n'}
Sempre tive um lado muito ligado a ciências humanas e sociais, artes e música, e busco 
diariamente conectar esses mundos, e sempre busquei essa interface mesmo com a 
rotina pesada de estudos.

Foi em minha experiência no ambulatório de acupuntura no Hospital Universitário da 
UFSC que me encantei com o mundo de estudos sobre dor. Além da oportunidade de 
ter um trabalho premiado, dos vários conhecimentos e da vivência com profissionais e 
pacientes incríveis, essa vivência me fez entender a dor como uma expressão daquilo 
que somos e continuamente construímos na nossa jornada, para além de ser o
resultado das sinalizações neurológicas que faz acender a luz de alerta quando algo 
não vai bem. 

Não é normal viver com dor, e a dor pode se tornar a doença em si.

Meu objetivo como médica é buscar a melhora dos pacientes, com os recursos que forem
necessários e proporcionais à individualidade de cada pessoa - quando não for possível,
ajudarei a buscar a melhor rede de apoio para trazer reforços a esse propósito.
Olhar cada um além dos exames, olhar o todo, pois cada elemento social e formativo 
influencia no processo de adoecimento e melhora. `}
                />

                
          
            </group>

          
        </>

    )

};