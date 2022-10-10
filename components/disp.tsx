import styled from "styled-components";
import { animated, useTrail, config } from "react-spring";
import { useState } from "react";

const Disp = () => {
    const [show, setshow] = useState(false);
    const trail = useTrail(16, {
        opacity: show ? 1 : 0,
        x: show ? 0 : 190,
        y: show ? 0 : -150,
        scale: show ? 1 : 0,

        duration: 500,
    });

    return (
        <>
            <Grid>
                {trail.map((styles, i) => (
                    <Img
                        key={i}
                        style={{
                            ...styles,
                        }}
                    >
                        <animated.img
                            style={{ right: `${((i % 4) + 0) * 25}%` }}
                            src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3148&q=80"
                            alt=""
                        />
                    </Img>
                ))}
            </Grid>
            <div
                style={{ cursor: "pointer", margin: "50px" }}
                onClick={() => {
                    setshow(!show);
                }}
            >
                SHOW
            </div>
        </>
    );
};

export default Disp;

const Grid = styled(animated.div)`
    margin: 50px;
    width: 500px;
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const Img = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: hidden;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;
