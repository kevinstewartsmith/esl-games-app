import { Cloud } from '@react-three/drei'

export default function Clouds() {
    
    return (
        <>
            <Cloud
                opacity={0.6}
                speed={0.8} // Rotation speed
                width={60} // Width of the full cloud
                depth={0.5} // Z-dir depth
                segments={80} // Number of particles
                position-y={45}
                position-x={0}
                position-z={-100}
            />
            <Cloud
                opacity={0.6}
                speed={0.8} 
                width={60}  
                depth={0.5} 
                segments={80} 
                position-y={45}
                position-x={80}
                position-z={-50}
            />
            <Cloud
                opacity={0.6}
                speed={0.8} 
                width={40} 
                depth={0.5} 
                segments={80} 
                position-y={45}
                position-x={-40}
                position-z={-50}
            />
        </>
    )

}