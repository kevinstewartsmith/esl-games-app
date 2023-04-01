import {StrictMode, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import './index.css'
import { Canvas, useThree } from '@react-three/fiber'
import Overlay from './components/Overlay'



export default function App(props) {

    const [balloons, setBalloons] = useState(3)
    function loseBalloon() {
        setBalloons(balloons - 1)
    }

    return (
        <div>
            <Canvas
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [ 0,0, 100 ]
                    
                } }  
                style={{position: 'fixed', top:0, right: 0, height: "100%", width:"100%"}}

            >
            <Experience 
                balloons={balloons} 
            />  
            </Canvas>
            <Overlay 
                className="overlay"
                loseBalloon={loseBalloon}
            /> 
        </div>
    )
}
