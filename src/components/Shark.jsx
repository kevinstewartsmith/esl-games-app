import { useFrame, useLoader } from '@react-three/fiber'
import { useState, useRef, useEffect } from 'react'  
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { generateRandomSharkPath} from '../exports/SharkExports.js';
import { useSpring, animated, config } from '@react-spring/three'

export default function Shark() {
    
    const model = useLoader(GLTFLoader, './clay_shark.glb')
    console.log(model)
    const myMesh = useRef();
    const [active, setActive] = useState(1);
    let startFinishSharkPath = [30, -20, 0];
    let getRandomSharkPath = [0,0,0]
    let nextPosition = []
    
    console.log(nextPosition);
    
    let nextX = 0
    let nextZ = 0 
    let nextRotation = 0

    function nextSharkPath() {
      let nextSharkPath = generateRandomSharkPath()
      nextX = nextSharkPath.randomX,
      nextZ = nextSharkPath.zPosition
      nextRotation = nextSharkPath.rotation
      console.log(nextSharkPath)
    }

    
    const { spring, position, rotation } = useSpring({ 
        spring: active,
        config: { mass: 5, tension: 30, friction: 20, precision: 0.1 }, 
        to: async (next) => {
            if (active === 1) {
              for (let i = 0; i < 4; i++) {
                await next( nextSharkPath() )
                //await next({ rotation:  nextRotation })
                await next({ 
                  rotation:  nextRotation,
                  position: [nextX, -20, nextZ] })  
              }
              
            }
          },
        from: {
            //position: [-30, -20, 0],
            position: [90,-20,0],
            rotation: 0
            
        },
        loop: true

    })


//Animation of shark bending 45 degrees to the left or right.
//If the shark is moving in the positive x direction, it will bend to the left. If the shark is moving in the negative x direction, it will bend to the left.
//The sharks bends back to Z 0 when it reaches the end of its path.
  useFrame(() => {
    if (myMesh.current) {
      if (nextX > 0) {
        myMesh.current.rotation.z = Math.PI/4
      } else if (nextX < 0) {
        myMesh.current.rotation.z = -Math.PI/4
      } else {
        myMesh.current.rotation.z = 0
      } 
    }
  })
//Darken the color of the shark
  useFrame(() => {
    if (myMesh.current) {
      myMesh.current.material.color.setHex(0x000000)
    }})
//Cut the shark into two halves along the y axis and separate the two halves by 5 units.
  useFrame(() => {
    if (myMesh.current) {
      myMesh.current.scale.set(5,5,5)
    }
  })

   
  return (

    <animated.mesh 
        scale={[5,5,5]}
        rotation-y={rotation}
        position={position} 
        onClick={() => setActive(Number(!active))}
        ref={myMesh}  
    >
      <primitive object={ model.scene } scale={2}/>
      {/* <meshPhongMaterial color="royalblue" /> */}
    </animated.mesh>
    
    
  )
}