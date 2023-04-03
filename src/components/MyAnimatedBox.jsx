import { useFrame } from '@react-three/fiber'
import { useState, useRef } from 'react'  


import { useSpring, animated, config } from '@react-spring/three'

export default function MyAnimatedBox() {
    
    const myMesh = useRef();
    const [active, setActive] = useState(1);

    let startFinishSharkPath = [30, -20, 0];

    function generateSharkPath() {
        console.log("Animation restart.");
        startFinishSharkPath = [30 + (Math.random() * 20 ) - 20, -20, 0 + (Math.random() * 10 ) - 5]
    }
    let getRandomSharkPath = [0,0,0]

    function generateRandomSharkPath() {
        getRandomSharkPath = [Math.random() * 60 - 30, -20, Math.random() * 60 - 100 ]
    }
    

    
    function getSharkPath() {return startFinishSharkPath}
    const { spring, position, rotation } = useSpring({ 
        spring: active,
        config: { mass: 5, tension: 20, friction: 20, precision: 0.1 }, 
        to: async (next) => {
            if (active === 1) {
              await next( generateRandomSharkPath() )
                for (let i = 0; i < 5; i++) {
                    generateRandomSharkPath()
                    await next({ position: getRandomSharkPath })
                }
              await next({ position: [-30,-20, 0] })
              
            }
          },
        from: {
            position: [-30, -20, 0],
            rotation: 0
            
        },
        loop: true

    })

   
  return (

    <animated.mesh 
        //scale-x={scale} 
        //scale-z={scale}
        scale={[5,5,5]}
        rotation-y={rotation}
        position={position}
        // position-x={positionX} 
        // position-y={positionY}
        // position-z={positionZ}  
        //position={spring}
        //onClick={() => setActive(!active)} 
        onClick={() => setActive(Number(!active))}
        ref={myMesh}  
    >
      <boxGeometry />
      <meshPhongMaterial color="royalblue" />
    </animated.mesh>
    
    
  )
}