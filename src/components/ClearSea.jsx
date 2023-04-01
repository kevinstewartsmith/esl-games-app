import { useFrame, useLoader } from '@react-three/fiber'
import { useState, useRef } from 'react'  
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { useSpring, animated, config } from '@react-spring/three'

export default function ClearSea() {
    
        const model = useLoader(GLTFLoader, './clear_water.glb')
        console.log(model)
    
        return (
            <primitive object={ model.scene } scale={3}/>
        )
}