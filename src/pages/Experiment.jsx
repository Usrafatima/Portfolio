import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Float, MeshDistortMaterial, Sphere, Box } from "@react-three/drei";
import { motion } from "framer-motion";
import gsap from "gsap";

// Konami Code Hook
const useKonamiCode = (callback) => {
  const [keys, setKeys] = useState([]);
  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys((prev) => {
        const newKeys = [...prev, e.key].slice(-10);
        if (JSON.stringify(newKeys) === JSON.stringify(konamiCode)) {
          callback();
          return [];
        }
        return newKeys;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [callback]);
};

// Animated 3D Sphere Component
function AnimatedSphere({ position, color, speed = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

// Visitor Counter 3D Component
function VisitorCounter3D({ count }) {
  const digits = count.toString().split("");
  
  return (
    <group>
      {digits.map((digit, i) => (
        <Text
          key={i}
          position={[i * 0.5 - (digits.length * 0.5) + 0.25, 0, 0]}
          fontSize={0.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {digit}
        </Text>
      ))}
    </group>
  );
}

// Floating Shapes Background
function FloatingShapes() {
  const shapes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 10 - 5,
    ],
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    scale: Math.random() * 0.5 + 0.3,
  }));

  return (
    <>
      {shapes.map((shape) => (
        <Float key={shape.id} speed={1} rotationIntensity={2} floatIntensity={1}>
          <mesh position={shape.position} scale={shape.scale}>
            {shape.id % 2 === 0 ? (
              <boxGeometry args={[1, 1, 1]} />
            ) : (
              <octahedronGeometry args={[0.7]} />
            )}
            <meshStandardMaterial
              color={shape.color}
              transparent
              opacity={0.6}
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

// Currently Working On Status Component
function CurrentStatus() {
  const [currentTask, setCurrentTask] = useState("");
  const tasks = [
    "Building amazing features 🚀",
    "Learning new technologies 📚",
    "Creating 3D experiences 🎨",
    "Optimizing performance ⚡",
    "Writing clean code 💻",
    "Debugging like a pro 🐛",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTask(tasks[Math.floor(Math.random() * tasks.length)]);
    }, 3000);
    setCurrentTask(tasks[0]);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-2xl">
      <h3 className="text-xl font-bold mb-2">🔴 Currently Working On</h3>
      <p className="text-lg animate-pulse">{currentTask}</p>
      <div className="mt-4 flex gap-2">
        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Live Status</span>
        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Active Now</span>
      </div>
    </div>
  );
}

// Easter Egg Modal
function EasterEggModal({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="bg-gradient-to-br from-purple-900 to-pink-900 p-8 rounded-3xl text-white text-center max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-4xl font-bold mb-4">🎉 You Found the Secret!</h2>
        <p className="text-lg mb-6">
          Congratulations! You've unlocked the Konami Code achievement!
        </p>
        <div className="text-6xl mb-6">🏆</div>
        <p className="text-sm opacity-80 mb-4">
          You're part of the elite 1% who know the ancient gaming secret!
        </p>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-white text-purple-900 rounded-full font-bold hover:scale-105 transition-transform"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

// Main Experiment Page
const Experiment = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [visitorCount, setVisitorCount] = useState(1247);
  const [activeSection, setActiveSection] = useState("overview");

  // Konami Code Listener
  useKonamiCode(() => {
    setShowEasterEgg(true);
    // Trigger confetti or special effects
    gsap.to("body", { backgroundColor: "#1a0a2e", duration: 0.5, yoyo: true, repeat: 3 });
  });

  // Simulate visitor count increment
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setVisitorCount((prev) => prev + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Section variants for framer-motion
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden">
      {/* Hero Section with 3D */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={null}>
              <AnimatedSphere position={[0, 0, 0]} color="#8b5cf6" />
              <AnimatedSphere position={[4, 2, -2]} color="#ec4899" speed={0.7} />
              <AnimatedSphere position={[-4, -2, -3]} color="#06b6d4" speed={0.5} />
              <FloatingShapes />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          >
            Experiment Lab
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl"
          >
            🧪 Where creativity meets technology
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-sm text-gray-400"
          >
            💡 Try the Konami Code: ↑↑↓↓←→←→BA
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            🚀 Experimental Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Visitor Counter Card */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30"
            >
              <h3 className="text-2xl font-bold mb-4">👥 Live Visitor Count</h3>
              <div className="h-32 mb-4">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={0.8} />
                  <pointLight position={[5, 5, 5]} />
                  <VisitorCounter3D count={visitorCount} />
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                </Canvas>
              </div>
              <p className="text-gray-400 text-sm">
                Real-time visualization of total visitors
              </p>
            </motion.div>

            {/* Current Status Card */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30"
            >
              <h3 className="text-2xl font-bold mb-4">⚡ Live Status</h3>
              <CurrentStatus />
              <p className="text-gray-400 text-sm mt-4">
                Auto-updating status showing current activity
              </p>
            </motion.div>

            {/* Easter Egg Card */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30"
            >
              <h3 className="text-2xl font-bold mb-4">🎮 Secret Easter Egg</h3>
              <div className="h-32 flex items-center justify-center mb-4">
                <div className="text-6xl">🥚</div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Enter the Konami Code to unlock a special surprise!
              </p>
              <button
                onClick={() => setShowEasterEgg(true)}
                className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Test Easter Egg
              </button>
            </motion.div>

            {/* Interactive 3D Playground */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="md:col-span-2 lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30"
            >
              <h3 className="text-2xl font-bold mb-4">🎨 3D Playground</h3>
              <div className="h-64 rounded-xl overflow-hidden">
                <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} color="#8b5cf6" />
                  <pointLight position={[-10, -10, -10]} color="#ec4899" />
                  <Suspense fallback={null}>
                    <AnimatedSphere position={[0, 0, 0]} color="#8b5cf6" />
                    <Box position={[3, 0, -2]} rotation={[0.5, 0.5, 0]}>
                      <boxGeometry args={[1.5, 1.5, 1.5]} />
                      <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
                    </Box>
                    <Sphere position={[-3, 0, -2]} scale={0.8}>
                      <icosahedronGeometry args={[1, 0]} />
                      <meshStandardMaterial color="#f59e0b" metalness={0.6} roughness={0.4} wireframe />
                    </Sphere>
                  </Suspense>
                  <OrbitControls />
                </Canvas>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Interactive 3D scene - drag to rotate, scroll to zoom
              </p>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30"
            >
              <h3 className="text-2xl font-bold mb-4">⚡ Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setVisitorCount((prev) => prev + 100)}
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-bold hover:scale-105 transition-transform"
                >
                  +100 Visitors
                </button>
                <button
                  onClick={() => gsap.to("body", { backgroundColor: "#ffffff", duration: 0.1, yoyo: true, repeat: 5 })}
                  className="w-full py-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg font-bold hover:scale-105 transition-transform"
                >
                  Flash Effect
                </button>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-bold hover:scale-105 transition-transform"
                >
                  Scroll to Top
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-20 px-4 bg-gray-900/50">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8">
            📋 Experiment Sections
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["overview", "features", "playground", "settings"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  activeSection === section
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 capitalize">
              {activeSection} Section Active
            </h3>
            <p className="text-gray-400">
              This demonstrates tabbed navigation functionality. Each tab could
              contain different experimental features or settings.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-4 rounded-lg text-center"
                >
                  <div className="text-2xl mb-2">
                    {["🎨", "⚡", "🚀", "🎮", "🧪", "💡", "🔮", "🌟"][i]}
                  </div>
                  <div className="text-xs text-gray-400">Item {i + 1}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            🎯 Want These Features on Your Main Site?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            These experimental features can be customized and integrated into your
            main portfolio based on your preferences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              ← Back to Main Site
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-gray-800 rounded-full font-bold text-lg hover:scale-105 transition-transform border border-purple-500/50"
            >
              Explore More ↓
            </button>
          </div>
        </motion.div>
      </section>

      {/* Easter Egg Modal */}
      {showEasterEgg && <EasterEggModal onClose={() => setShowEasterEgg(false)} />}
    </div>
  );
};

export default Experiment;
