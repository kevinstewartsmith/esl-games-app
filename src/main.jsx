import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Canvas, useThree } from '@react-three/fiber'
import Overlay from './components/Overlay'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>  
        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 0,0, 60 ]
                
            } }
        >
            <App />  
        </Canvas>
        <Overlay className="overlay" /> 
    </StrictMode>
)
