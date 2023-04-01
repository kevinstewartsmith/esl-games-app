import {StrictMode, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import './index.css'
import { Canvas, useThree } from '@react-three/fiber'
import Overlay from './components/Overlay'
import App from './App'

// const [balloons, setBalloons] = useState(3)
// function loseBalloon() {
//     setBalloons(balloons - 1)
// }

const root = ReactDOM.createRoot(document.querySelector('#root'))



root.render(
    <StrictMode>  
        {/* <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 0,0, 100 ]
                
            } }    
        >
        <Experience 
            //balloons={balloons} 

            />  
        </Canvas>
        <Overlay 
            className="overlay"
            loseBalloon={loseBalloon}
         />  */}
        <App />
    </StrictMode>
)
