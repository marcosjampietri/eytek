import { useState, useEffect } from "react";

// import { A11y } from "@react-three/a11y";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
// import { useControls } from "leva";
import { animated, useTrail } from "react-spring";
import { a } from "@react-spring/three";
import styled from "styled-components";

import React from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
    const [L, setL] = useState(0);
    const [Blr, setBlr] = useState(0);
    const data = useScroll();

    useFrame((state, delta) => {
        setL(10 + data.offset * 50);
        setBlr(data.offset * 30);
    });

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: [0],
        triggerOnce: false,
    });

    interface trailProps {
        position?: number;
    }
    const titleTrail = `EYETEK`;
    const line1Trail = useTrail<trailProps>(titleTrail.length, {
        y: inView ? 0 : 30,
        transform: inView
            ? "rotate(0deg) translate3d(0, 0vh, 0)"
            : "rotate(120deg) translate3d(0, 0vh, 0)",
        delay: 0,
    });

    return (
        <>
            <Section style={{ left: `${L}vw`, filter: `blur(${Blr}px)` }}>
                <div ref={ref} style={{ display: "flex", overflow: "hidden" }}>
                    {line1Trail.map(({ y, ...otherProps }, i) => (
                        <H1
                            key={i}
                            style={{
                                ...otherProps,
                                fontFamily: "Modena Sans",
                                transformOrigin: "bottom left",
                            }}
                        >
                            {titleTrail[i] !== "_" ? (
                                titleTrail[i].replace(/-/g, ``)
                            ) : (
                                <div style={{ color: "transparent" }}>
                                    &nbsp;
                                </div>
                            )}
                        </H1>
                    ))}
                </div>
                <h3 style={{ color: "white", fontWeight: "100" }}>
                    We help your business stand out from the very first penny
                    wether you need a website, SEO, content or a marketing
                    campaign. And best thing is:
                    <span> without ruining your pocket!</span> We are by your
                    side.
                </h3>
            </Section>
        </>
    );
};

export default Hero;

const Section = styled.section`
    position: absolute;
    top: 40vh;

    width: 100vw;
    max-width: 600px;

    div {
        width: fit-content;
        border-bottom: 3px solid white;
        margin-bottom: 30px;
    }

    h3 {
        width: 80%;
        margin: 0px;
        font-size: 16px;
        line-height: 1.5em;
        -webkit-text-stroke: 1px white;

        span {
            color: hsla(38, 100%, 50%, 1);
            -webkit-text-stroke: 1px hsla(38, 100%, 50%, 1);
            font-weight: bold;
        }
    }
`;

const H1 = styled(animated.h1)`
    width: fit-content;
    margin: 0px 5px;

    color: hsla(0, 0%, 100%, 1);
    font-size: clamp(24px, 6vw, 70px);
`;
