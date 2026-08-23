import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animated 404 Text Component
function Animated404Text() {
  useFrame((state) => {
    // Animation logic can be added here
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        position={[0, 0, 0]}
        fontSize={3}
        fontWeight="bold"
        color="#8b5cf6"
        anchorX="center"
        anchorY="middle"
      >
        404
      </Text>
    </Float>
  );
}

// Floating Particles
function Particles() {
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 10 - 5,
    ],
    size: Math.random() * 0.1 + 0.05,
  }));

  return (
    <>
      {particles.map((particle) => (
        <mesh key={particle.id} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
        </mesh>
      ))}
    </>
  );
}

// 3D Scene for 404 Page
function Scene404() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
      <Suspense fallback={null}>
        <Animated404Text />
        <Particles />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

// 404 Page Component
const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 h-1/2">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <Scene404 />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Spacer for 3D text */}
          <div className="h-48 md:h-64"></div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            🚀 Oops! You've ventured into the unknown
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            This page doesn't exist, but your sense of adventure is commendable!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-purple-500/50"
            >
              🏠 Return Home
            </Link>
            <Link
              to="/experiment"
              className="px-8 py-4 bg-gray-800 border border-purple-500/50 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              🧪 Try Experiments
            </Link>
          </motion.div>

          {/* Fun Facts or Tips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/30"
          >
            <h3 className="text-lg font-bold mb-3">💡 Did You Know?</h3>
            <p className="text-gray-400 text-sm">
              The 404 error code comes from HTTP protocol - it means "Not Found".
              But don't worry, even broken links can lead to new discoveries!
            </p>
          </motion.div>

          {/* Easter Egg Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 text-sm text-gray-500"
          >
            🤫 Psst... Try the Konami Code on the Experiment page for a surprise!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
