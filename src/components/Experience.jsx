import {OrbitControls, Text, useScroll } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from "react";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { val } from "@theatre/core";
import { Bloom } from '@react-three/postprocessing'
import Autumn from "./Autumn";
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

    //Theatre
    const sheet = useCurrentSheet()

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
        if (camera.position.x <= -4 && camera.position.x >= -16 && camera.position.z >= -13 && camera.position.z <= -12) {
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
        // update the position of the playhead in the sequence, as a fraction of its whole length
        sheet.sequence.position = scroll.offset * sequenceLength
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
                maxAzimuthAngle={Math.PI /3}
                rotateSpeed={0.935}
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
                position-x={-7.2}
                position-y={1}
                position-z={58.2}
                lineHeight={1.2}
                textAlign="center"
                scale={0.70}
            >
                Olhar a floresta além da árvore {'\n'}

                Ver você além dos seus exames.
                <meshBasicMaterial color="#0F3F0B"/>
            </Text>
            {/* QUALIFICATIONS */}
            <group ref={qualificationsRef} scale={[1, 1, 1]}>
                <CustomMeshWithText
                    meshPosition={[-10, 0, -1]}
                    meshRotation={[0, 6.8, 0]}
                    boxDimensions={[10, 6, 0.10]}
                    textPosition={[0, -0.5, 0.1]}
                    textScale={0.8}
                    lineHeight={0.8}
                    textContent={`Médica pela UFSC${"\n\n"}`}
                />
                <CustomMeshWithText
                    meshPosition={[5, 0, 2.5]}
                    meshRotation={[0, -6.8, 0]}
                    boxDimensions={[13, 6, 0.15]}
                    textPosition={[0, 0, 0.1]}
                    textScale={0.75}
                    lineHeight={1.2}
                    textContent={`Pós-graduada em Dor pelo ${"\n"} Instituto Israelita Albert Einstein`}
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
                    meshPosition={[80, -1, 5]}
                    meshRotation={[0, 4.62, 0]}
                    boxDimensions={[80, 72, 0.15]}
                    textPosition={[0.8, 1.5, 2]}
                    lineHeight={1.8}
                    textAlign="justify"
                    textScale={1.5}
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
            <Bloom intensity={1} luminanceThreshold={0.9} luminanceSmoothing={0.9}/>
        </>

    )

};