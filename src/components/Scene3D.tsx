"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useMemo } from 'react';
import { Bloom, EffectComposer, SSAO } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

function Shape({ position, color }: { position: [number, number, number]; color: string }) {
  const geometry = useMemo(() => {
    const shapes = ['box', 'sphere', 'octahedron'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    return shape;
  }, []);

  return (
    <Float
      speed={1.5}
      rotationIntensity={2}
      floatIntensity={2}
      position={position}
    >
      {geometry === 'box' && (
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2,2, 2]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            
            opacity={0.7}
            metalness={0.5}
            roughness={0.2}
            envMapIntensity={1}
            wireframe
            wireframeLinewidth={2}
          />
        </mesh>
      )}
      {geometry === 'sphere' && (
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[2, 32, 32]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.7}
            metalness={0.5}
            roughness={0.2}
            envMapIntensity={1}
            wireframe
            wireframeLinewidth={2}
          />
        </mesh>
      )}
      {geometry === 'octahedron' && (
        <mesh castShadow receiveShadow>
          <octahedronGeometry args={[0.7]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.7}
            metalness={0.5}
            roughness={0.2}
            envMapIntensity={1}
            wireframe
            wireframeLinewidth={2}
          />
        </mesh>
      )}
    </Float>
  );
}

export default function Scene3D() {
  const shapes = useMemo(() => {
    return Array.from({ length: 15 }, () => ({
      position: [
        (Math.random() - 0.5) * 30,  // Aumenté el rango a 30 para mayor separación en X
        (Math.random() - 0.5) * 30,  // Aumenté el rango a 30 para mayor separación en Y
        (Math.random() - 0.5) * 15   // Aumenté el rango a 15 para mayor separación en Z
      ] as [number, number, number],
      color: `hsl(${Math.random() * 360}, 50%, 75%)`
    }));
  }, []);
  
  

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }} shadows>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 5, 30]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <directionalLight
          position={[-5, 5, 5]}
          intensity={0.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        {shapes.map((shape, i) => (
          <Shape key={i} position={shape.position} color={shape.color} />
        ))}
        <EffectComposer>
          <Bloom
            intensity={1}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            blendFunction={BlendFunction.SCREEN}
          />
          <SSAO
            intensity={30}
            radius={0.15}
            luminanceInfluence={0.5}
            samples={16}
            rings={4}
            blendFunction={BlendFunction.MULTIPLY}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}