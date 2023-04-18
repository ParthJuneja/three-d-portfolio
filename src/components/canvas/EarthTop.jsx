import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ert = ({isMobile}) => {
  const e = useGLTF('./planet/scene.gltf');

  return (
    <mesh>
      <primitive object={e.scene} 
      scale =  {isMobile ? 1.30  : 2.4}
      position = {isMobile ? [0,-1.2,-0.4] :[0,-2.3,-0.2]}
      rotation = {[-0.01,-0.2,-0.1]}
      />
    </mesh>
  );
};

const ErtCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return() => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ert isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ErtCanvas;