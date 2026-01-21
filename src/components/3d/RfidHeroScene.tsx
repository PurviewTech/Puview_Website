// src/3d/RfidHeroScene.tsx
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

function RfidTagVisual() {
  const groupRef = useRef<THREE.Group>(null);

  const ringGeo = useMemo(() => new THREE.TorusGeometry(1.05, 0.02, 24, 160), []);

  const ringMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#6366F1"),
        emissive: new THREE.Color("#6366F1"),
        emissiveIntensity: 0.75,
        metalness: 0.35,
        roughness: 0.25,
        transparent: true,
        opacity: 0.95,
      }),
    []
  );

  const tagMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#0B1020"),
        emissive: new THREE.Color("#111827"),
        emissiveIntensity: 0.35,
        metalness: 0.4,
        roughness: 0.25,
      }),
    []
  );

  const chipMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#A78BFA"),
        emissive: new THREE.Color("#A78BFA"),
        emissiveIntensity: 0.8,
        metalness: 0.2,
        roughness: 0.15,
      }),
    []
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.35;
      groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Signal rings */}
      <mesh geometry={ringGeo} material={ringMat} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={ringGeo} material={ringMat} rotation={[Math.PI / 2, 0, Math.PI / 3]} scale={0.82} />
      <mesh geometry={ringGeo} material={ringMat} rotation={[Math.PI / 2, 0, -Math.PI / 3]} scale={0.64} />

      {/* Tag body */}
      <mesh material={tagMat} position={[0, 0.05, 0]}>
        <boxGeometry args={[1.3, 0.18, 0.9]} />
      </mesh>

      {/* Highlight strip */}
      <mesh material={ringMat} position={[0, 0.16, 0]} scale={[0.98, 1, 0.66]}>
        <boxGeometry args={[1.3, 0.03, 0.9]} />
      </mesh>

      {/* Chip */}
      <mesh material={chipMat} position={[0.25, 0.17, 0]}>
        <boxGeometry args={[0.3, 0.05, 0.22]} />
      </mesh>

      {/* Antenna line */}
      <mesh material={ringMat} position={[-0.18, 0.17, 0]}>
        <boxGeometry args={[0.55, 0.02, 0.03]} />
      </mesh>
    </group>
  );
}

export function RfidHeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [2.8, 1.6, 3.2], fov: 42 }}
      // ✅ transparent WebGL background
      gl={{ alpha: true, antialias: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0); // ✅ alpha = 0 => transparent
      }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 4]} intensity={1.1} />
      <pointLight position={[-4, 2, -2]} intensity={0.6} />

      <Float speed={1.25} rotationIntensity={0.55} floatIntensity={0.85}>
        <RfidTagVisual />
      </Float>

      {/* Environment gives nice reflections, but NOT a visible background */}
      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0.35}
      />
    </Canvas>
  );
}
