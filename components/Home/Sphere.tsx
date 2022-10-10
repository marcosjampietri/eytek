import { useRef, useState } from "react";
import useStore from "../../store/";
import { Mesh } from "three";
// import { A11y } from "@react-three/a11y";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, Environment, MeshDistortMaterial } from "@react-three/drei";
// import { useControls } from "leva";
import { useSpring } from "react-spring";
import { a } from "@react-spring/three";
import React from "react";

const Sphere = ({ route }: any) => {
    const { router } = useStore();
    // This reference will give us direct access to the THREE.Mesh object
    const mesh = useRef<Mesh>(null!);
    const { mouse } = useThree();
    const data = useScroll();

    const AnimatedMaterial: any = a(MeshDistortMaterial);
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(0);
    const { spring } = useSpring({
        spring: hovered,
    });
    const scale = spring.to([0, 1], [1.5, 2]);
    const color = spring.to(
        [0, 1],
        ["hsla(38, 0%, 10%, 1);", "hsla(38, 100%, 30%, 1);"]
    );
    // Optional Leva debug panel for properties
    // const { scale } = useControls({ scale: 1 });
    // Subscribe this component to the render-loop, rotate the mesh every frame

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.position.x = mouse.x / 2;
            mesh.current.position.y = mouse.y / 2 - data.offset * 10;
            // mesh.current.scale.x = 1 + data.offset * 5;
            // mesh.current.scale.y = 1 + data.offset * 5;
        } else null;
    });

    return (
        <>
            <a.mesh
                ref={mesh}
                scale={scale}
                // onClick={() => router.push(route)}
                onPointerOver={() => setHover(Number(true))}
                onPointerOut={() => setHover(Number(false))}
            >
                <sphereGeometry args={[1, 64, 64]} />
                <AnimatedMaterial
                    color={color}
                    envMapIntensity={1}
                    clearcoat={0.1}
                    clearcoatRoughness={0}
                    metalness={0.2}
                />
                <Environment preset="warehouse" />
            </a.mesh>

            <directionalLight position={[3, 3, 3]} />
            <ambientLight />
        </>
    );
};

export default Sphere;
