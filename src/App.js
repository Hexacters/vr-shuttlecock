import './App.css';
import { Model } from './Tennis_court_animation';
import PlayerModal from './modal/player';
import FinalModal from './modal/final';
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Grid, OrbitControls, Stage } from '@react-three/drei';
function App() {

  return (
    <div className="App">
      <Canvas gl={{ logarithmicDepthBuffer: true }} shadows >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', color: 'red', colorBlend: 2, opacity: 2 }} adjustCamera={0.5}>
          {/* <PlayerModal /> */}
          {/* <Model /> */}
          <FinalModal />
        </Stage>
        <Grid renderOrder={-1} position={[0, -1.85, 0]} infiniteGrid cell Size={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />
        <OrbitControls makeDefault />
        <Environment background preset="night" blur={0.4} />
      </Canvas>
    </div>
  );
}

function Rig() {
  useFrame((state) => {
    state.camera.position.lerp({ x: 0, y: -state.pointer.y / 4, z: state.pointer.x / 2 }, 0.1)
    state.camera.lookAt(-1, 0, 0)
  })
}

export default App;
