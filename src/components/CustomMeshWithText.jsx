import React from 'react';
import { Text, RoundedBox, Html } from '@react-three/drei';

const CustomMeshWithText = ({
  meshPosition,
  meshRotation,
  textPosition,
  textScale,
  textContent,
  boxDimensions,
  lineHeight,
  textAlign,
  complement,
  headText,
}) => {
  return (
    <mesh position={meshPosition} rotation={meshRotation}>
      <RoundedBox args={boxDimensions} radius={1}>
        <meshStandardMaterial color='white' emissive='white' transparent={true} opacity={0.8} />
        <Text
          font={"fonts/morgenlicht.ttf"}
          position={[-20.2, 30.8, 0.1]}
          textScale={0.8}
          lineHeight={0.8}
          textAlign={textAlign}
          scale={4.6}
        >
          {headText}
          <meshBasicMaterial color="brown" />
        </Text>
        <Text
          font={"fonts/Montserrat-Medium.ttf"}
          position={textPosition}
          lineHeight={lineHeight}
          textAlign={textAlign}
          scale={textScale}
        >
          {textContent}
          <meshBasicMaterial color="brown" />
        </Text>
        <Text
          position={[0, -0.8, 0.1]}
          textScale={0.8}
          lineHeight={0.8}
          textAlign={textAlign}
          scale={0.6}
        >
          {complement}
          <meshBasicMaterial color="brown" />
        </Text>
        {/* <Html position={[0, 0, 0]} transform>
          <img
            src="/img.png" // Use the correct path to your image
            alt="Descrição da Imagem"
            style={{ width: '100%', height: 'auto', position: 'absolute', top: '10px', right: '10px' }} // Adjust the style as needed
          />
        </Html> */}
      </RoundedBox>
    </mesh>
  );
};

export default CustomMeshWithText;
