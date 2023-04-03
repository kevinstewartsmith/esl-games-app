import { useFrame, useLoader } from '@react-three/fiber'
import { useState, useRef, useEffect } from 'react'  
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { generateRandomSharkPath} from '../exports/SharkExports.js';
import { useSpring, animated, config } from '@react-spring/three'

export default function Man() {
    const model = useLoader(GLTFLoader, './man.glb')
    
    return (
        <animated.mesh 
            scale={[0.5,0.5,0.5]}
            position={[2,-17,0]} 
        >
            <primitive object={ model.scene } scale={2}/>
        {/* <meshPhongMaterial color="royalblue" /> */}
        </animated.mesh>
    )
}