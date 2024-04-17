import { MeshReflectorMaterial, Float, Text, Html, PivotControls, TransformControls, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import Scene from '../public/Scene'

export default function Experience() {
    const cube = useRef()
    const sphere = useRef()

    return (<>

        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <PivotControls
            anchor={[0, 0, 0]}
            depthTest={false}
            lineWidth={4}
            axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
            scale={100}
            fixed={true}
        >
            <mesh ref={sphere} position-x={- 2}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                <Html
                    position={[1, 1, 0]}
                    wrapperClass="label"
                    center
                    distanceFactor={8}
                    occlude={[sphere, cube]}
                >
                    That's a sphere 👍
                </Html>
            </mesh>
        </PivotControls>

        <mesh ref={cube} position-x={2} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <TransformControls object={cube} />
                <Scene />

        <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <MeshReflectorMaterial
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={1}
                mirror={0.5}
                color="greenyellow"
            />
        </mesh>


    </>)
}