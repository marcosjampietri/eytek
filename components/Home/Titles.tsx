import { useRef, useEffect } from "react";
import useStore from "../../store";

import { useSprings, config, animated, useTransition } from "react-spring";
import styled from "styled-components";
import React from "react";
import BezierEasing from "bezier-easing";

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

const Titles = () => {
    const { Page } = useStore();

    const Items = [
        {},
        { title: "HOME" },
        { title: "SERVICES" },
        { title: "WORKS" },
        { title: "CONTACT" },
    ];

    const prevPage = usePrevious(Page);
    const reverse = prevPage! > Page;

    const easing = BezierEasing(0.95, 0, 0, 1);

    const transitions = useTransition(Page, {
        from: { opacity: 0, x: reverse ? -100 : 100 },
        enter: [
            { opacity: 1, x: 0 },
            {
                opacity: 0,
                x: 0,
                config: {
                    tension: 280,
                    friction: 400,
                },
                delay: 1000,
            },
        ],
        leave: { opacity: 0, x: reverse ? 100 : -100 },
        config: {
            duration: 1000,
            easing: (t) => easing(t),
        },
    });

    return transitions((styles, page) => (
        <Div
            style={{
                ...styles,
                transform: "translate(-50%, 0%)",
            }}
        >
            <div>
                <animated.h3>{Items[page].title}</animated.h3>{" "}
            </div>
        </Div>
    ));
};

export default Titles;

const Div = styled(animated.div)`
    position: fixed;
    top: 70px;
    left: 50vw;
    padding: 0px 5vw;
    width: fit-content;

    pointer-events: none;

    div {
        width: 100%;
        background: hsla(38, 100%, 50%, 1);
    }

    h3 {
        font-size: clamp(30px, 10vw, 100px);
    }
`;
