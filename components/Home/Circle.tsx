import styled from "styled-components";
import useStore from "../../store";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "react-spring";

import React, { useEffect, useState, useRef } from "react";

const Circle = () => {
    const { opacity } = useSpring({
        opacity: 1,
    });
    const [rot, setrot] = useState(0);
    const data = useScroll();
    const ref: any = useRef();

    useFrame((state, delta) => {
        setrot(data.offset);

        // mesh.current.scale.x = 1 + data.offset * 5;
        // mesh.current.scale.y = 1 + data.offset * 5;
    });

    return (
        <Img
            ref={ref}
            src="/icons/circle.svg"
            style={{
                opacity,
                top: `${85 + rot * 400}vh`,
                left: "90vw",
                transform: `rotate(${rot * -400}deg)`,
            }}
        />
    );
};

export default Circle;

const Img = styled(animated.img)`
    position: fixed;

    width: 100px;
    height: 100px;
    filter: hue-rotate(210deg);
    border: none;
`;
