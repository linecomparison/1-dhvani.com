import { Suspense, useEffect, useState, useRef } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./Loader"
import "./style.css";

const MyModel = () => {
  const myModel = useGLTF("./Model/drp.gltf");
  const groupRef = useRef();
  return (
    <group ref={groupRef} position={[0, -2.6, 0]}>
      <pointLight position={[1.8, 6.1, -0.4]} color={"yellow"} intensity={2} />
      <directionalLight
        position={[-800, 900, 900]}
        color={"#453ac5"}
        intensity={10}
        castShadow
      />
      <primitive object={myModel.scene.clone()} />
    </group>
  );
};

const Spline = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [15, 0, 35],
        fov: 13,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.6} />
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MyModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Spline;
