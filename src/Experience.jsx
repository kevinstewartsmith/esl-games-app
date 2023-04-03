import { OrbitControls } from '@react-three/drei'
import MyAnimatedBox from "./components/MyAnimatedBox.jsx"
import  Sea  from "./components/Sea.jsx"
import BalloonBouquet from './components/BalloonBouquet.jsx'
import Clouds from './components/Clouds.jsx'
import Shark from './components/Shark.jsx'




export default function Experience(props) {    
    return <>
        <OrbitControls makeDefault />
        {/* <Perf /> */}
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        <Clouds />
        {/* <MyAnimatedBox /> */}
        <Shark />
        <BalloonBouquet balloons={props.balloons} />
       
        {/* <mesh position={[0,-20,0]}  scale={[300, 10, 200]} >
            <boxGeometry/>
            <meshLambertMaterial transparent opacity={0.5} color="#a1f2d9" />
        </mesh> */}
        {/* <ClearSea /> */}
        <Sea />
    </>
}