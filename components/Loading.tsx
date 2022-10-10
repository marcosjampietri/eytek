import { useState, useEffect } from "react";
import styled from "styled-components";
import { animated, useTrail, config, useTransition } from "react-spring";
import { useProgress, Html } from "@react-three/drei";
import useStore from "../store";

function Mount() {
    const [show, set] = useState(false);
    const transitions = useTransition(show, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: show,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!show),
    });
    return transitions(
        (styles, item) => item && <animated.div style={styles}>✌️</animated.div>
    );
}

const Loading = () => {
    const { Loading, setLoading } = useStore();
    const transitions = useTransition(Loading, {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 200,
        config: config.molasses,
    });

    const { active, progress, errors, item, loaded, total } = useProgress();
    {
        /* return <Html center>{progress} % loaded</Html> */
    }

    useEffect(() => {
        if (loaded == 1) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [loaded]);

    console.log(Loading, loaded);

    return transitions((styles, item) =>
        item ? <Div style={styles}>LOADING {progress} % </Div> : null
    );
};

export default Loading;

const Div = styled(animated.div)`
    position: fixed;
    width: 100vw;
    height: 100vh;

    z-index: 9999;
    background: white;

    display: grid;
    place-items: center;
`;
