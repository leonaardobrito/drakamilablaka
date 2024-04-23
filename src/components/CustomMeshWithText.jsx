import React from 'react';
import { Text, RoundedBox} from '@react-three/drei';

const CustomMeshWithText = ({ meshPosition, meshRotation, textPosition, textScale, textContent, boxDimensions, lineHeight, textAlign }) => {
    return (
        <mesh position={meshPosition} rotation={meshRotation}>
            <RoundedBox args={boxDimensions} radius={1}>
                <meshStandardMaterial color='white' emissive='white' transparent={true} opacity={0.8}/>
                <Text
                    // font={"fonts/Montserrat-Medium.ttf"}
                    position={textPosition}
                    lineHeight={lineHeight}
                    textAlign={textAlign}
                    scale={textScale}
                >
                    {textContent}
                    <meshBasicMaterial color="brown"/>
                </Text>
            </RoundedBox>
        </mesh>
    );
};

export default CustomMeshWithText;
