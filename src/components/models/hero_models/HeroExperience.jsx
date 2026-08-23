import { OrbitControls, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: isMobile ? 50 : 40 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={isMobile ? 40 : 80} />

        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <group
            scale={isSmallMobile ? 0.5 : isMobile ? 0.7 : isTablet ? 0.9 : 1.15}
            position={isMobile ? [0, -4, 0] : [0, -3, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Room />
          </group>
        </Float>
      </Suspense>
    </Canvas>
  );

};

export default HeroExperience;
