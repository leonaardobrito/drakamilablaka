import { OrbitControls, Text, useScroll, ScrollControls, Scroll, Html } from "@react-three/drei";
import Autumn from "./Autumn";
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useEffect, Suspense } from "react";

import * as THREE from 'three';


export const Experience = () => {
  const { camera } = useThree();
  const meshRef = useRef();
  // const cameraRef = useRef(camera);

  useFrame((state, delta) => {
    window.addEventListener('mousedown',
        function (e) {

            if (e.buttons === 1) {
                meshRef.current["position"].z -= delta;
                console.log("click ", e.buttons)
            } else {

                meshRef.current["position"].z += delta;
                console.log("button click ", e.buttons);
            }
        });
    //   z+= 0.5;
    //   if (z < zFinal) {
    //     camera.position.z = z;
    //   }
    // //   // cameraRef.current.rotateX += 10
    // //   console.log("SCROLL: ", (camera.rotation.x), "State: ", state)
  });

  // function animate() {
  // }

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.3} />
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        rotateSpeed={0.435}
      />
      <ScrollControls pages={2} horizontal infinite>
        {/* <Experience /> */}
        <Suspense fallback={null}>
          <Text
            ref={meshRef}
            font={"fonts/Montserrat-Medium.ttf"}
            // fontWeight={500}
            position-x={-1.3}
            position-y={-0.5}
            position-z={1}
            lineHeight={0.8}
            textAlign="center"
          >
            SEJE ARVE{"\n"}NA MORAL
            <meshBasicMaterial color="green" />
          </Text>
          <Autumn />
          {/* <Scene /> */}
        </Suspense>
      </ScrollControls>

      <mesh 
          ref={meshRef}>
        <boxGeometry args={[8, 8, 0.1]} />
        <Text
          font={"fonts/Montserrat-Medium.ttf"}
          // fontWeight={500}
          position-x={-1.3}
          position-y={-0.5}
          position-z={0.1}
          lineHeight={0.8}
          textAlign="center"
        >
          SEJE ARVE{"\n"}NA MORAL
          <meshBasicMaterial color="green" />
        </Text>
        <meshStandardMaterial color='orange' />
      </mesh>

      <mesh position={[980, 150, 25]} scale={100} >
        {/* <Html

          wrapperClass="label"
          center
        >
          Lorem!!! Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.👍
        </Html> */}
      </mesh>

      <mesh position={[-20, 30, 100]} scale={100} >
        <Html

          wrapperClass="label"
          center
        >
          <p>

            ++++++Lorem Ips standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.👍
          </p>
        </Html>
      </mesh>
      <mesh position={[-970, 190, -100]} scale={100} >
        <Html

          wrapperClass="label"
          center
        >
          ****Lorem Ips standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.👍
        </Html>
      </mesh>
      {/* <perspectiveCamera
        ref={cameraRef}
        fov={78}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
        position={[0, 0, 5]}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        rotateSpeed={1.435} />
      <Text
        // font={"fonts/montserrat-regular.woff2"}
        position-x={-1.3}
        position-y={-0.5}
        position-z={1}
        lineHeight={0.8}
        textAlign="center"
      >
        SEJE ARVE{"\n"}NA MORAL
        <meshBasicMaterial color="white" />
      </Text>
      <Autumn /> */}
    </>
  )
};


// useEffect(() => {
//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     const scrollX = scrollY;
//     console.log("X: ", scrollX, "Y: ", scrollY);
//     cameraRef.current.rotation.x = THREE.MathUtils.degToRad(scrollX);
//   };

//   window.addEventListener('scroll', handleScroll, { passive: true });

//   // return () => {
//   //   window.removeEventListener('scroll', handleScroll);
//   // };
// }, []);

// useFrame(() => {
// Update camera position based on scroll position
//   const scrollX = -window.scrollY;
//   console.log("scrll: ", window.scrollY)
//   cameraRef.current.rotation.y = THREE.MathUtils.degToRad(scrollX / 100); // Adjust the factor as needed
// });
// console.log("oi", camera)
// camera.lookAt([0,0,0])
// if (window.innerWidth > 768) {
//   useFrame((state, delta) => {
//     const scrollX = window.scrollX;
//     console.log("ScrollX: ", scrollX);
//     cameraRef.current.position.x = scrollX / 100;
// The offset is between 0 and 1, you can apply it to your models any way you like
// const offset = scroll.offset;
// Calculate the position of the camera
// const x = Math.sin(1 * Math.PI * 2) * -10;
// const z = Math.cos(1 * Math.PI * 2) * -10;
// Set the camera's position
// console.log("camera: ", x);
// camera.position.set(-x, camera.position.y, z);
// state.camera.lookAt(0, 0, 0);
//   });
// } else {
// Code to run only on mobile
// ...
// }