import { useState, useRef, useEffect } from 'react'  
import { useSpring, animated, config } from '@react-spring/three'
import {  Sphere, Line } from '@react-three/drei'


export default function Balloon(props) {
    const myMesh = useRef();
    const [active, setActive] = useState(0);

// If props.value equals props.balloons, set active to 1
    useEffect(() => {
        if (props.value === props.balloons) {
            setActive(1)
        }
    }, [props.value, props.balloons]) 

    //function getSharkPath() {return startFinishBalloonPath}
    const { spring, position, rotation } = useSpring({ 
        spring: active,
        config: { mass: 3, tension: 280, friction: 120, precision: 0.1, duration: 10000 }, 
        to: async (next) => {
            if (active === 1) {
                await next({ 
                    position: [0,80, 0],
                    rotation: 0
                })        
            }
        },
        from: {
            position: props.positionArray,
            rotation: props.rotationZ    
        },
        loop: false
    })
    

return (
        <animated.mesh 
            //scale-x={scale} 
            //scale-z={scale}
            scale={[2.5,3.5,2.5]}
            rotation-z={rotation}
            //position={props.positionArray}
            position={position}
            // position-x={props.positionX} 
            // position-y={props.positionY}
            // position-z={props.positionZ}  
            //position={spring}
            //onClick={() => setActive(!active)} 
            onClick={() => setActive(Number(!active))}
            ref={myMesh}  
        >

            <Sphere>
                <meshStandardMaterial color="hotpink" />
            </Sphere>
            <Line
                points={[[0, 0,0],[0, -3,0]]}       // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
                color="gray"                   // Default
                lineWidth={1}                   // In pixels (default)
                segments                        // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
                dashed={false}                  // Default
                //vertexColors={[[0, 0, 0], ...]} // Optional array of RGB values for each point
                //{...lineProps}                  // All THREE.Line2 props are valid
                //{...materialProps}              // All THREE.LineMaterial props are valid
            />
            
        </animated.mesh>

    
)
}