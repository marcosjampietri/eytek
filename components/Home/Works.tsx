import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import clamp from "lodash.clamp";
import { useFrame, useThree } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { useSpring, config } from "react-spring";

const pages = [
    {
        name: "E-Commerce",
        img: "/img/e-shop.jpg",
        path: "https://new-shop-tau.vercel.app",
    },
    {
        name: "Professional Portfolio",
        img: "/img/andrea.jpg",
        path: "https://andreamangiacavallo.com/",
    },
    {
        name: "Game Development",
        img: "/img/SSC.jpg",
        path: "https://edu-me-git-main-marcosjampietri.vercel.app",
    },
    {
        name: "Static Website",
        img: "/img/kll.jpg",
        path: "https://www.kallooenglish.com",
    },
];

const Works = () => {
    const ref = useRef(0);
    const width = window.innerWidth;

    const optn = {
        threshold: [0.5],
        triggerOnce: true,
    };
    const [refV, inView] = useInView(optn);

    const { y, opacity } = useSpring({
        y: inView ? 0 : 200,
        opacity: inView ? 1 : 0,
        config: config.slow,
    });

    const [springs, api] = useSprings(pages.length, (i) => ({
        x: i * width,
        scale: 1,
        display: "block",
        cursor: "alias",
        config: {
            tension: 180,
            friction: 16,
        },
    }));

    const [actv, setactv] = useState(false);

    {
        /* const nxt = (i) => {
        if (actv) ref.current = i + 1;
    };
    const prev = () => {
        if (actv) ref.current = ref.current - 1;
    }; */
    }

    const bind = useDrag(
        ({ active, movement: [mx], direction: [xDir], cancel }) => {
            if (active && Math.abs(mx) > 150) {
                ref.current = clamp(
                    ref.current + (xDir > 0 ? -1 : 1),
                    0,
                    pages.length - 1
                );

                cancel();
            }
            active && setactv(true);
            api.start((i) => {
                if (i < ref.current - 1 || i > ref.current + 1)
                    return { display: "none" };
                const x = (i - ref.current) * width + (active ? mx : 0);
                const scale = active ? 1 - Math.abs(mx) / width : 1;
                const cursor = active ? "grabbing" : "grab";
                return { x, scale, display: "block", cursor };
            });
        },
        { axis: "lock", filterTaps: true }
    );

    return (
        <Section ref={refV}>
            {springs.map(({ x, display, scale, cursor }, i) => (
                <Page {...bind()} key={i} style={{ display, x, y, opacity }}>
                    <animated.div
                        style={{
                            scale,
                            backgroundImage: `url(${pages[i].img})`,
                            cursor,
                        }}
                    >
                        <Title>{pages[i].name}</Title>
                    </animated.div>
                    {/* <Button style={{ left: "300px" }} onClick={() => nxt(-i)}>
                        prev
                    </Button>
                    <Button onClick={() => nxt(i)}>NEXT</Button> */}
                </Page>
            ))}
        </Section>
    );
};
export default Works;

const Section = styled.section`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 300vh;
    left: 0vw;

    overflow: hidden;
    background-image: radial-gradient(hsla(38, 100%, 50%, 1), black);

    display: grid;
    place-items: center;
`;

const Page = styled(animated.div)`
    position: absolute;
    width: 90%;
    height: 65%;
    touch-action: none;

    cursor: grab;

    div {
        touch-action: none;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        width: 100%;
        height: 100%;
        box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5),
            0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
    }
`;
const Title = styled(animated.h3)`
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 26px;

    background: orange;
    padding: 20px;
    width: fit-content;

    box-shadow: 1px 1px 10px 5px hsla(0, 0%, 0%, 0.3);
`;
const Button = styled(animated.button)`
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 18px;

    padding: 10px 40px;
    width: fit-content;

    // cursor: alias;
    background: orange;
    box-shadow: 1px 1px 10px 5px hsla(0, 0%, 0%, 0.3);
    border-radius: 5px;
`;
