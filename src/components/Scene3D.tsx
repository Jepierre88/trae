"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useMemo, Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Componente de fallback para cuando el modelo no carga
function FallbackPlanet() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial 
        color="#3b82f6"
        transparent
        opacity={0.8}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
}

function PlanetModel() {
  const planetRef = useRef<THREE.Group>(null);
  
  const gltf = useGLTF('/models/planet_earth.glb');
  
  const planetScene = useMemo(() => {
    try {
      const clonedScene = gltf.scene.clone();
      clonedScene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.frustumCulled = true;
          child.castShadow = false;
          child.receiveShadow = false;
        }
      });
      return clonedScene;
    } catch (error) {
      console.warn('Error processing planet model:', error);
      return null;
    }
  }, [gltf.scene]);

  useFrame((state) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.005;
      planetRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  if (!planetScene) {
    return <FallbackPlanet />;
  }

  return (
    <group ref={planetRef}>
      <primitive 
        object={planetScene} 
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, 0]}
      />
    </group>
  );
}

// Componente principal optimizado
export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ 
          antialias: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
          alpha: false,
          preserveDrawingBuffer: false
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        frameloop="demand"
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 8, 25]} />
        
        <ambientLight intensity={1.2} />
        <pointLight position={[8, 8, 8]} intensity={1.0} />
        <directionalLight
          position={[-5, 5, 5]}
          intensity={0.6}
        />
        <directionalLight
          position={[5, -5, -5]}
          intensity={0.4}
        />

        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.2}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
        />

        {/* Modelo del planeta */}
        <Suspense fallback={<FallbackPlanet />}>
          <PlanetModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
