import { useState } from "react";
import NXimg from "next/image";

import {
    useSpring,
    useSprings,
    config,
    animated,
    useSpringRef,
    useChain,
} from "react-spring";
import styled from "styled-components";

import BezierEasing from "bezier-easing";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

const Services = () => {
    const [trigger, settrigger] = useState(true);
    const optn = {
        threshold: [0.5],
        triggerOnce: trigger,
    };

    const [prlx, setprlx] = useState(0);
    const data = useScroll();
    useFrame((state, delta) => {
        const a = data.offset;

        setprlx(a);
    });

    const { height: VH } = useThree((state) => state.viewport);

    const [ref, inView, entry] = useInView(optn);
    const [refWD, inViewWD] = useInView(optn);
    const [refBI, inViewBI] = useInView(optn);
    const [refLG, inViewLG] = useInView(optn);
    const [refSEO, inViewSEO] = useInView(optn);

    // Build a transition and catch its ref
    const springRef = useSpringRef();
    const transitionRef = useSpringRef();
    useChain(inView ? [springRef, transitionRef] : [transitionRef, springRef]);

    const servList = [
        {
            name: "WEB DESIGN",
            short: "This is where your online presence starts. Your website gives life to your brand!",
            descr: "Lorem ipsum dolor sKhdasljhd ashjkdas dolor sKhdasljhd ashjkd dolor sKhdasljhd ashjkd jhasdfhas diusaduiasdh sdf fd fdfadf",
            refff: refWD,
            visible: inViewWD,
            img: "https://images.unsplash.com/photo-1517485883175-4ae93081b334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
            imgpos: 100,
        },
        {
            name: "BRAND IDENTITY",
            short: "Build a memorable image that allows your potential customers know who you are and what you do in a fraction of second.",
            descr: "Lorem ipsum dolor dolor sKhdasljhd ashjkd sKhdasljhd ashjkdas jhasdfhas diusaduiasdh sdf fd fdfadf",
            refff: refBI,
            visible: inViewBI,
            img: "https://images.unsplash.com/photo-1543804082-5e00fcfc1e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2298&q=80",
            imgpos: 300,
        },
        {
            name: "SEO",
            short: "Increase the chances of your public finding out about you through searching mecanisms.",
            descr: "Lorem ipsum dolor sKhdasljhddolor sKhdasljhd ashjkd dolor sKhdasljhd ashjkdduiasdh dolor sKhdasljhd ashjkd",
            refff: refSEO,
            visible: inViewSEO,
            img: "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3148&q=80",
            imgpos: 250,
        },
        {
            name: "MARKETING",
            short: "Spread the word about your company aiming directly the public who's interested in what you do or sell.",
            descr: "Lodolor sKhdasljhd ashjkd  dolor sKhdasljhd ashjkd dolor sKhdasljhd ashjkd dolor sKhdasljhd ashjkdiasdh sdf fd ",
            refff: refLG,
            visible: inViewLG,
            img: "https://images.unsplash.com/photo-1531986627054-7f294d095acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
            imgpos: 300,
        },
    ];
    const easing = BezierEasing(0.95, 0, 0, 1);
    const { width } = useSpring({
        width: inView ? "100%" : "0%",
        config: {
            duration: 1000,
            easing: (t) => easing(t),
        },
        ref: springRef,
    });

    interface ASD {
        to: (next: any, cancel: any) => Promise<void>;
        config?: { mass: number; tension: number; friction: number };
        opacity?: number;
        opacityb?: number;
        y?: number;
        rot?: number;
        zoom?: number;
        width?: string;
    }

    const servSprings = useSprings(
        servList.length,
        servList.map<ASD>(({ visible: v }) => ({
            to: async (next, cancel) => {
                await next({
                    opacity: v ? 1 : 0,
                    y: v ? 0 : 100,
                    rot: v ? 0 : 120,
                    zoom: v ? 1 : 1.5,
                    config: { mass: 0.5, tension: 280, friction: 60 },
                });
                await next({
                    opacityb: v ? 1 : 0,
                    width: v ? "100%" : "0%",
                    config: {
                        duration: 1000,
                        easing: (t: any) => easing(t),
                    },
                });
            },

            from: {
                opacity: 0,
                opacityb: 0,
                y: 100,
                rot: 120,
                zoom: 1,
                width: "0%",
            },
        }))
    );

    return (
        <Section>
            {/* <div
                style={{
                    background: "cyan",
                    padding: "10px",
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    cursor: "pointer",
                    color: "black",
                }}
                onClick={() => settrigger(!trigger)}
            >
                TRIGGER ONCE: {trigger ? "ON" : "OFF"}
            </div> */}
            <OurServ ref={ref}>
                <animated.h2 style={{ width }}>OUR SERVICES</animated.h2>
            </OurServ>
            {servSprings.map(
                ({ opacity, y, rot, width, opacityb, zoom }, i) => (
                    <ServiceCard
                        key={i}
                        ref={servList[i].refff}
                        style={{ y, opacity }}
                    >
                        <Img>
                            <animated.img
                                style={{
                                    transform: zoom!.to(
                                        (z: any) =>
                                            `scale(${z}) translateY(${
                                                prlx * -80
                                            }%)`
                                    ),
                                }}
                                src={servList[i].img}
                                alt=""
                            />
                        </Img>
                        <animated.h2
                            style={{
                                opacity,
                                transform: rot!.to(
                                    (r: any) => `rotate(${r}deg)`
                                ),
                                transformOrigin: "top left",
                                // width: "fit-content",
                                width: "100%",
                            }}
                        >
                            {servList[i].name}
                            <Line
                                style={{
                                    width,
                                }}
                            />
                        </animated.h2>
                        <animated.p style={{ opacity: opacityb }}>
                            {servList[i].short}
                        </animated.p>
                        <More style={{ opacity: opacityb }}>KNOW MORE</More>
                    </ServiceCard>
                )
            )}
        </Section>
    );
};

export default Services;

const OurServ = styled(animated.div)`
    margin: 0px auto;
    width: 39vw;

    white-space: nowrap;
    overflow: hidden;

    h2 {
        font-size: 5vw;

        background: hsla(38, 100%, 50%, 1);
        color: black;
        text-align: center;
    }
`;
const More = styled(animated.button)`
    width: 100%;
    max-width: 200px;

    margin: 10px;
`;
const Section = styled(animated.section)`
    position: absolute;
    top: 100vh;
    right: 0vw;
    width: 100vw;

    transform: translate3d(100vw, 0, 0);
    color: white;

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
`;

const ServiceCard = styled(animated.div)`
    position: relative;
    width: 90vw;
    // max-width: 1200px;
    height: 35vh;
    margin: 10px auto;
    padding: 20px;

    background: hsla(0, 0%, 100%, 0);

    h2,
    p {
        position: absolute;
        background: hsla(0, 0%, 0%, 0);
        margin: 0px;
        padding: 20px;
        -webkit-text-stroke: 0.05em black;
    }
    h2 {
        top: 0px;
        left: 0px;
        font-size: 40px;
        letter-spacing: 2px;
    }
    p {
        bottom: 0px;
        right: 0px;
        max-width: 400px;
        color: hsla(0, 0%, 80%, 1);
    }

    button {
        position: absolute;
        bottom: 0px;
        left: 0px;
        padding: 15px 30px;
        margin: 20px;

        background: hsla(38, 100%, 50%, 1);
        border: none;
        border-radius: 5px;
    }
`;
const Img = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    box-shadow: inset 2px 2px 15px black;

    img {
        width: 100%;
    }
`;
const Line = styled(animated.div)`
    height: 4px;
    background: hsla(38, 100%, 50%, 1);
    margin: 20px 0px;
`;
