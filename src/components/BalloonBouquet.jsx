import { useState, useRef, useEffect } from 'react'  
import { useSpring, animated, config } from '@react-spring/three'
import {  Sphere, Line } from '@react-three/drei'
import Balloon from './Balloon.jsx';

export default function BalloonBouquet(props) {
    let balloon = props.balloons
    
    console.log("balloon bouqet: " + balloon);
    // If balloon is decreases, move one balloon above the viewport

    const myMesh = useRef();
    const [active, setActive] = useState(1)

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



    // Const that is balloon with value 1
    const balloon1 = useRef()
    // Const that is balloon with value 2
    const balloon2 = useRef()
    //Const that is balloon with value 3
    const balloon3 = useRef()
    const balloons = [balloon1, balloon2, balloon3]


    return (
        <animated.group position={position} >
            <Balloon 
                useRef={balloon1} 
                value={1} 
                // positionX={-3} 
                // positionY={0} 
                // positionZ={-3}  
                rotationZ={Math.PI/11}
                positionArray={[-3,0,-3]}
                balloons={props.balloons}
            />
            <Balloon 
                useRef={balloon2} 
                value={0} 
                positionArray={[0,0,0]}
                balloons={props.balloons}
            />
            <Balloon 
                useRef={balloon3} 
                value={2} 
                // positionX={3}  
                // positionY={0} 
                // positionZ={-3}  
                rotationZ={-Math.PI/11}
                positionArray={[3,0,-3]}
                balloons={props.balloons}
            />     
        </animated.group>
    )
}