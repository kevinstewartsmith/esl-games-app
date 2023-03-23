import { OrbitControls } from '@react-three/drei'
import MyAnimatedBox from "./components/MyAnimatedBox.jsx"
import  Sea  from "./components/Sea.jsx"
import Balloon from './components/Ballon.jsx'
import Clouds from './components/Clouds.jsx'
import Shark from './components/Shark.jsx'
// import { Perf } from 'r3f-perf'

export default function App() {    
    return <>
        <OrbitControls makeDefault />
        {/* <Perf /> */}
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        <Clouds />
        {/* <MyAnimatedBox /> */}
        <Shark />
        <Balloon />
        {/* <mesh position={[0,-20,0]}  scale={[150, 10, 150]} >
            <boxGeometry/>
            <meshLambertMaterial transparent opacity={0.5} color="#a1f2d9" />
        </mesh> */}
        
        <Sea />
    </>
}