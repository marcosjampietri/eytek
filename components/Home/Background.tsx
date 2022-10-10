import { useRef, useState } from "react";
import useStore from "../../store";
import { Mesh, MathUtils } from "three";

// import { A11y } from "@react-three/a11y";
import { useFrame, useThree } from "@react-three/fiber";
import {
    useScroll,
    Environment,
    MeshReflectorMaterial,
    GradientTexture,
    Html,
} from "@react-three/drei";
// import { useControls } from "leva";
import { useSpring } from "react-spring";
import { a } from "@react-spring/three";
import React from "react";

const Plane = ({ route }: any) => {
    const { router } = useStore();
    // This reference will give us direct access to the THREE.Mesh object
    const mesh = useRef<Mesh>(null!);
    const { mouse } = useThree();
    const data = useScroll();

    const AnimatedMaterial: any = a(MeshReflectorMaterial);
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
            // mesh.current.position.x = mouse.x / 2;
            //  mesh.current.position.y = mouse.y / 2 - data.offset * 10;
            // mesh.current.scale.x = 1 + data.offset * 5;
            // mesh.current.scale.y = 1 + data.offset * 5;

            {
                /* mesh.current.position.y = MathUtils.damp(
                mesh.current.position.y,
                -height - data.offset * 10,
                4,
                delta
            ); */
            }
        } else null;
    });

    const { height, width } = useThree((state) => state.viewport);

    return (
        <>
            <a.mesh
                ref={mesh}
                rotation={[0, 0, 0]}
                scale={[width, height, 1]}
                position={[0, 0, 0]}
            >
                <planeGeometry />
                <meshBasicMaterial>
                    <GradientTexture
                        stops={[0, 1]} // As many stops as you want
                        colors={["black", "orange"]} // Colors need to match the number of stops
                        size={1024} // Size is optional, default = 1024
                    />
                </meshBasicMaterial>
            </a.mesh>
        </>
    );
};

export default Plane;
