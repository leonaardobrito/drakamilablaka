import { OrbitControls, Text, useScroll, ScrollControls, Scroll, Html,RoundedBox } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect, Suspense } from "react";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { Bloom } from '@react-three/postprocessing'
import Autumn from "./Autumn";
import * as THREE from 'three';
import { val } from "@theatre/core";

import {getProject} from "@theatre/core";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import {cameraPosition} from "three/examples/jsm/nodes/accessors/CameraNode.js";
import CustomMeshWithText from "./CustomMeshWithText.jsx";

// 0F3F0B

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin,TextPlugin);

export const Experience = () => {


    const { camera } = useThree()

    const scroll = useScroll()
    const controlsRef = useRef();



    // if (window.innerWidth > 768) {
    //     useFrame((state, delta) => {
    //         // The offset is between 0 and 1, you can apply it to your models any way you like
    //         const offset = scroll.offset;
    //         // Calculate the position of the camera
    //         const x = Math.sin(offset * Math.PI * 2) * -10;
    //         const z = Math.cos(offset * Math.PI * 2) * -10;
    //         // Set the camera's position
    //         // console.log("camera: ", x)
    //         camera.position.set(-x, camera.position.y, z);
    //         state.camera.lookAt(0, 0, 0);
    //     });
    // } else {
    //     // Code to run only on mobile
    //     // ...
    // }

    //Theatre
    const sheet = useCurrentSheet()

    const posRef = useRef()
    const meshRef = useRef();
    const textRef = useRef();
    const HeroRef = useRef();
    const pos2Ref = useRef()
    const mesh2Ref = useRef();
    const text2Ref = useRef();
    // const cameraRef = useRef(camera);
    // useEffect(() => {
    //     // Fade out animation
    //     gsap.to(meshRef.current.material, {
    //         opacity: 0,
    //         duration: 5, // Duration of the animation
    //         onComplete: () => {
    //             // Optionally, perform some action when animation is complete
    //             console.log("Fade-out animation complete");
    //         },
    //     });
    // }, []);
    useFrame(() => {

        // Theatre mode
        const sequenceLength = val(sheet.sequence.pointer.length)
        // update the position of the playhead in the sequence, as a fraction of its whole length
        sheet.sequence.position = scroll.offset * sequenceLength
    })

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

            <Text
                font={"fonts/Montserrat-Medium.ttf"}
                ref={HeroRef}
                position-x={-1}
                position-y={1}
                position-z={38.5}
                lineHeight={1.2}
                textAlign="center"
                scale={0.35}
            >
                Olhar a floresta além da árvore {'\n'}

                Ver você além dos seus exames.
                <meshBasicMaterial color="#0F3F0B"/>
            </Text>
            {/* QUALIFICATIONS */}
            <group ref={posRef}>
                <CustomMeshWithText
                    // meshPosition={[-30, 0, -35]}
                    meshPosition={[-50, 0, -55]}
                    meshRotation={[0, 7, 0]}
                    boxDimensions={[10, 6, 0.15]}
                    textPosition={[0, -0.5, 0.1]}
                    textScale={0.8}
                    lineHeight={0.8}
                    textContent={`Médica pela UFSC${"\n\n"}`}
                />
                <CustomMeshWithText
                    // meshPosition={[-16, 0, -40]}
                    meshPosition={[-29, 0, -50]}
                    meshRotation={[0, -6.8, 0]}
                    boxDimensions={[13, 6, 0.15]}
                    textPosition={[0, 0, 0.1]}
                    textScale={0.75}
                    lineHeight={1.2}
                    textContent={`Pós-graduada em Dor pelo ${"\n"} Instituto Israelita Albert Einstein`}
                />
            </group>

            <CustomMeshWithText
                // meshPosition={[45, 0, -5]}
                meshPosition={[35, 0, -80]}
                meshRotation={[0, -7.4, 0]}
                boxDimensions={[19, 6, 0.15]}
                textPosition={[0, 0, 0.1]}
                textScale={0.75}
                lineHeight={1.2}
                textContent={`Foco em pacientes com dor aguda ou crônica, ${"\n"} sem deixar de olhar o todo`}
            />

            <CustomMeshWithText
                // meshPosition={[35, 2, 75]}
                meshPosition={[109, 2, -20]}
                meshRotation={[0, 4.9, 0]}
                textPosition={[-3, 0, 2]}
                boxDimensions={[45, 16, 0.15]}
                lineHeight={1.8}
                textScale={0.9}
                textContent={`
                    O desejo em me tornar médica vem desde criança,
                    e ao longo da minha formação me vi apaixonada por tudo o que se relaciona
                    com a medicina - anamnese e comunicação, os exames complementares e tratamentos.
                    Mas sempre tive um lado muito ligado a ciências humanas e sociais, artes e música,
                    e busco diariamente conectar esses mundos, e sempre
                    busquei essa interface mesmo com a rotina pesada de estudos.
                `}
            />

            <CustomMeshWithText
                // meshPosition={[-10, 2, 55]}
                // meshRotation={[0, 2, 0]}
                meshPosition={[90, 18, 75]}
                meshRotation={[0, 3.5, 0]}
                textPosition={[-3, 0, 2]}
                boxDimensions={[45, 16, 0.15]}
                lineHeight={1.8}
                textScale={0.9}
                textContent={`
                    Foi em minha experiência no ambulatório de acupuntura no Hospital
                    Universitário da UFSC que me encantei com o mundo de estudos sobre dor. Além da
                    oportunidade de ter um trabalho premiado, dos vários conhecimentos e da vivência com
                    profissionais e pacientes incríveis, essa vivência me fez entender a dor como uma expressão
                    daquilo que somos e continuamente construímos na nossa jornada, para além de ser o
                    resultado das sinalizações neurológicas que faz acender a luz de alerta quando algo não vai
                    bem. 
                `}
            />

            <CustomMeshWithText
                // meshPosition={[-60, 2, 15]}
                // meshRotation={[0, 2, 0]}
                meshPosition={[90, -3, 75]}
                meshRotation={[0, 3.5, 0]}
                textPosition={[0, 0, 2]}
                boxDimensions={[45, 16, 0.15]}
                lineHeight={1.8}
                textScale={1.9}
                textContent={`Não é normal viver com dor. ${'\n'} ela pode se tornar a doença em si.`}
            />

            <CustomMeshWithText
                // meshPosition={[-60, 20, 15]}
                // meshRotation={[0, 2, 0]}
                meshPosition={[-80, 20, 105]}
                meshRotation={[0, 2.5, 0]}
                textPosition={[0, 0, 2]}
                boxDimensions={[95, 16, 0.15]}
                lineHeight={1.8}
                textScale={1.9}
                textContent={`Meu objetivo como médica é buscar a melhora dos pacientes, com os recursos que forem
                            necessários e proporcionais à individualidade de cada pessoa - quando não for possível,
                            ajudarei a buscar a melhor rede de apoio para trazer reforços a esse propósito. `}
            />
            <CustomMeshWithText
                meshPosition={[-80, 0, 105]}
                meshRotation={[0, 2.5, 0]}
                textPosition={[0, 0, 2]}
                boxDimensions={[55, 16, 0.15]}
                lineHeight={1.8}
                textScale={1.9}
                textContent={`Olhar cada um além dos exames, olhar o todo, ${'\n'} pois cada elemento social e formativo influencia no 
processo de adoecimento e melhora.`}
            />

            <Bloom intensity={1} luminanceThreshold={0.9} luminanceSmoothing={0.9}/>

            {/*<mesh position={[-970, 190, -100]} scale={100}>*/}
            {/*    <Html*/}

            {/*        wrapperClass="label"*/}
            {/*        center*/}
            {/*    >*/}
            {/*        ****Lorem Ips standard dummy text ever since the 1500s, when an unknown printer took a galley of*/}
            {/*        type and scrambled it to make a type specimen book.👍*/}
            {/*    </Html>*/}
            {/*</mesh>*/}
        </>
    )
};