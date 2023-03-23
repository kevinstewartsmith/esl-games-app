import { useState, useRef } from 'react'  
import { useSpring, animated, config } from '@react-spring/three'
import {  Sphere } from '@react-three/drei'

export default function Balloon() {
    const myMesh = useRef();
    const [active, setActive] = useState(1);

    let startFinishBalloonPath = [0, 18, 0];

    function generateSharkPath() {
        console.log("Animation restart.");
        startFinishBalloonPath = [0, 18, 0 + (Math.random() * 10 ) - 5]
    }
    let getRandomBalloonPath = [0,0,0]

    function generateRandomBalloonPath() {
        getRandomBalloonPath = [Math.random() * 10 - 5, 18, Math.random() * 60 - 40 ]
    }
    //function getSharkPath() {return startFinishBalloonPath}
    const { spring, position, rotation } = useSpring({ 
        spring: active,
        config: { mass: 2, tension: 280, friction: 120, precision: 0.1, duration: 5000 }, 
        to: async (next) => {
            if (active === 1) {


              await next( generateRandomBalloonPath() )
                for (let i = 0; i < 2; i++) {
                    generateRandomBalloonPath()
                    await next({ position: getRandomBalloonPath })
                }
              await next({ position: [0,18, 0] })
              
            }
        },
        from: {
            position: [0, 18, 0],
            rotation: 0      
        },
        loop: true
    })

    return (
        <animated.mesh 
            //scale-x={scale} 
            //scale-z={scale}
            scale={[2.5,2.5,2.5]}
            //rotation-y={rotation}
            position={position}
            // position-x={positionX} 
            // position-y={positionY}
            // position-z={positionZ}  
            //position={spring}
            //onClick={() => setActive(!active)} 
            onClick={() => setActive(Number(!active))}
            ref={myMesh}  
        >
            <Sphere>
                <meshStandardMaterial color="hotpink" />
            </Sphere>
        </animated.mesh>
    )
}