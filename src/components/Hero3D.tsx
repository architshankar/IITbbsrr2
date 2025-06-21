
import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const CircuitNode = ({ position, size, color }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
      
      // Rotation animation
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.003;
      
      // Scale animation on hover
      const targetScale = hovered ? 1.5 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }

    if (glowRef.current) {
      // Glow effect animation
      glowRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
      glowRef.current.rotation.y += 0.01;
      glowRef.current.rotation.x += 0.008;
      
      const glowScale = hovered ? 2.2 : 1.8;
      glowRef.current.scale.lerp(new THREE.Vector3(glowScale, glowScale, glowScale), 0.1);
    }
  });

  return (
    <group>
      {/* Outer glow sphere */}
      <mesh
        ref={glowRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size * 1.2, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.1}
          transparent
          opacity={0.2}
        />
      </mesh>
      
      {/* Core sphere */}
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.4}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
};

const CircuitLine = ({ start, end, color }: any) => {
  const lineRef = useRef<THREE.Line>(null);

  useFrame((state) => {
    if (lineRef.current && lineRef.current.material) {
      const material = lineRef.current.material as THREE.LineBasicMaterial;
      // Pulsing opacity animation
      material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
    }
  });

  const points = useMemo(() => {
    return [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  }, [start, end]);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    return geom;
  }, [points]);

  return (
    <primitive
      ref={lineRef}
      object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ 
        color, 
        transparent: true, 
        opacity: 0.4,
        linewidth: 2 
      }))}
    />
  );
};

const InteractiveBackground = () => {
  const { mouse, viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Mouse-based rotation with smooth interpolation
      const targetRotationY = mouse.x * 0.2;
      const targetRotationX = mouse.y * 0.15;
      
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
      
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  // Create background particles
  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(200 * 3);
    
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  const nodes = useMemo(() => [
    { position: [-4, 2, -2], size: 0.2, color: '#68E2E7' },
    { position: [-2, 1, -1], size: 0.15, color: '#68E2E7' },
    { position: [0, 0, -3], size: 0.25, color: '#046DFC' },
    { position: [2, -1, -1], size: 0.18, color: '#68E2E7' },
    { position: [4, 1, -2], size: 0.22, color: '#046DFC' },
    { position: [-3, -2, 1], size: 0.19, color: '#046DFC' },
    { position: [1, 2, 0], size: 0.21, color: '#68E2E7' },
    { position: [3, -2, 2], size: 0.17, color: '#046DFC' },
    { position: [-1, -3, -1], size: 0.16, color: '#68E2E7' },
    { position: [5, 0, 1], size: 0.23, color: '#046DFC' },
    { position: [-5, -1, 0], size: 0.14, color: '#68E2E7' },
    { position: [0, 3, 1], size: 0.20, color: '#046DFC' },
  ], []);

  const connections = useMemo(() => [
    { start: [-4, 2, -2], end: [-2, 1, -1], color: '#68E2E7' },
    { start: [-2, 1, -1], end: [0, 0, -3], color: '#68E2E7' },
    { start: [0, 0, -3], end: [2, -1, -1], color: '#046DFC' },
    { start: [2, -1, -1], end: [4, 1, -2], color: '#046DFC' },
    { start: [-3, -2, 1], end: [1, 2, 0], color: '#68E2E7' },
    { start: [1, 2, 0], end: [3, -2, 2], color: '#046DFC' },
    { start: [0, 0, -3], end: [1, 2, 0], color: '#68E2E7' },
    { start: [4, 1, -2], end: [5, 0, 1], color: '#046DFC' },
    { start: [-1, -3, -1], end: [-3, -2, 1], color: '#68E2E7' },
    { start: [3, -2, 2], end: [5, 0, 1], color: '#046DFC' },
    { start: [-5, -1, 0], end: [-3, -2, 1], color: '#68E2E7' },
    { start: [0, 3, 1], end: [1, 2, 0], color: '#046DFC' },
    { start: [5, 0, 1], end: [0, 3, 1], color: '#68E2E7' },
  ], []);

  return (
    <group ref={groupRef}>
      {/* Background particles */}
      <points ref={particlesRef} geometry={particleGeometry}>
        <pointsMaterial
          color="#68E2E7"
          size={0.02}
          transparent
          opacity={0.3}
        />
      </points>
      
      {/* Circuit connections */}
      {connections.map((connection, index) => (
        <CircuitLine key={`line-${index}`} {...connection} />
      ))}
      
      {/* Circuit nodes */}
      {nodes.map((node, index) => (
        <CircuitNode key={`node-${index}`} {...node} />
      ))}
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#68E2E7" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#046DFC" />
      <spotLight
        position={[0, 8, 8]}
        angle={0.4}
        penumbra={1}
        intensity={0.7}
        color="#68E2E7"
      />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.5}
        color="#046DFC"
      />
      <InteractiveBackground />
    </>
  );
};

export const Hero3D = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} pointer-events-auto`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
