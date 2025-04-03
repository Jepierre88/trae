"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useMemo } from 'react';
import { Bloom, EffectComposer, SSAO } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

function Shape({ position, color }: { position: [number, number, number]; color: string }) {
  const geometry = useMemo(() => {
    const shapes = ['box', 'sphere', 'octahedron'];
    return shapes[Math.floor(Math.random() * shapes.length)];
  }, []);

  const materialProps = {
    transparent: true,
    opacity: 0.7,
    metalness: 0.5,
    roughness: 0.2,
    envMapIntensity: 1,
    wireframe: false, // Desactiva el wireframe para mejorar el rendimiento
    wireframeLinewidth: 2,
  };

  return (
    <Float
      speed={1.5}
      rotationIntensity={2}
      floatIntensity={2}
      position={position}
    >
      {geometry === 'box' && (
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhysicalMaterial color={color} {...materialProps} />
        </mesh>
      )}
      {geometry === 'sphere' && (
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[2, 32, 32]} />
          <meshPhysicalMaterial color={color} {...materialProps} />
        </mesh>
      )}
      {geometry === 'octahedron' && (
        <mesh castShadow receiveShadow>
          <octahedronGeometry args={[0.7]} />
          <meshPhysicalMaterial color={color} {...materialProps} />
        </mesh>
      )}
    </Float>
  );
}

export default function Scene3D() {
  const shapes = useMemo(() => {
    return Array.from({ length: 10 }, () => ({ // Reducido a 10 para mejorar el rendimiento
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 15,
      ] as [number, number, number],
      color: `hsl(${Math.random() * 360}, 50%, 75%)`,
    }));
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }} shadows>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 5, 30]} />
        <ambientLight intensity={0.7} />
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
            intensity={0.2}  // Reducido a 0.5 para mejorar el rendimiento
            luminanceThreshold={0.1}
            luminanceSmoothing={0.8}
            blendFunction={BlendFunction.SCREEN}
          />
          <SSAO
            intensity={35}  // Reducido para mejorar el rendimiento
            radius={0.1}
            luminanceInfluence={0.5}
            samples={8}  // Reducido a 8 samples
            rings={2}    // Reducido a 2 para un menor impacto visual
            blendFunction={BlendFunction.MULTIPLY}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
