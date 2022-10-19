import { useRef, useEffect, useState } from "react";
import useStore from "../../store";

import {
    useSpring,
    useSprings,
    config,
    animated,
    useTransition,
} from "react-spring";
import { useDrag } from "@use-gesture/react";
import styled from "styled-components";
import React from "react";
import { below } from "../../styles/breakpoints";

// Usage

// Hook
const usePrevious = (value: any) => {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    // Store current value in ref
    useEffect(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current;
};

const MiniMap = () => {
    const { Page } = useStore();

    const delay = 400;

    const [dragn, setdragn] = useState(false);

    const [{ x, y }, api] = useSpring(() => ({
        x: 0,
        y: 0,
        config: config.wobbly,
    }));

    // Set the drag hook and define component movement based on gesture data
    {
        /* const bind = useDrag(({ down, movement: [mx, my] }) => {
        // down ? setdragn(true) : setdragn(false);
        api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
    }); */
    }

    const pgMarkers = useSprings(
        [...Array(4)].length,
        [...Array(4)].map((_, i) => ({
            opacity: i + 1 == Page ? 0.9 : 0.3,
            background: i + 1 == Page ? "hsla(45, 100%, 50%, 1)" : "grey",
            width: i + 1 == Page ? "10px" : "4px",
            boxShadow:
                i + 1 == Page
                    ? "1px 1px 20px 15px hsla(38, 100%, 50%, 0.3)"
                    : "1px 1px 10px 0px hsla(38, 100%, 50%, 0.3)",
            // width: index + 1 == Page ? "100%" : "0%",
            delay,
        }))
    );

    const prevPage = usePrevious(Page);
    const reverse = prevPage! > Page;

    const transitions = useTransition(Page, {
        from: { opacity: 0, y: reverse ? -50 : 50 },
        enter: { opacity: 1, y: 0 },
        leave: { opacity: 0, y: reverse ? 50 : -50 },
        config: config.wobbly,
        delay,
    });

    return (
        <Div>
            {pgMarkers.map((styles, index) => (
                <animated.div
                    key={index}
                    style={styles}
                    className={`${index + 1 == Page ? "active" : ""}`}
                />
            ))}
            <PgNum>
                <span
                    style={{
                        left: "10%",
                        textShadow: "1px 1px 10px 10px hsla(38, 100%, 50%, 1)",
                    }}
                >
                    0
                </span>
                {transitions(
                    (styles, item) =>
                        item && (
                            <animated.span
                                style={{
                                    ...styles,
                                }}
                            >
                                {item}
                            </animated.span>
                        )
                )}
            </PgNum>
        </Div>
    );
};

export default MiniMap;

const Div = styled(animated.div)`
    position: fixed;

    top: 0px;
    height: 50vh;
    margin: 25vh 0px;
    padding: 20px 0px;
    // pointer-events: none;

    backdrop-filter: blur(2px);
    background: hsla(0, 0%, 0%, 0.3);
    // transform: translateY(-50%);
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    // box-shadow: inset 1px 1px 10px hsla(0, 0%, 0%, 0.3);
    //cursor: move;

    transition: 0.5s;
    :hover {
        transition: 0.5s;
        opacity: 0.3;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        // transform: translateX(-50%);
        background: grey;
        border-radius: 2px;
        margin: 4px 10px;

        width: 4px;
        height: 25%;
    }

    ${below.med`
        
        align-items: start;
        height: 70vh;
        margin: 15vh 0px;
        padding: 0px 10px
        
       
    `};
`;
const PgNum = styled(animated.span)`
    position: relative;
    padding: 0px;
    width: 100px;
    height: 70px;

    span {
        position: absolute;
        top: 7px;
        left: 50%;
        width: 100%;
        height: fit-content;
        font-size: clamp(24px, 5vw, 48px);
        font-family: Modena Sans;

        color: hsla(42, 100%, 70%, 1);
        text-shadow: 0px 0px 12px hsla(38, 100%, 50%, 0.9);
        -webkit-text-stroke: 0.03em hsla(38, 150%, 20%, 0.4);
    }
`;
