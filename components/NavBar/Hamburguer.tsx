import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import useStore from "../../store";

const Burger = () => {
    const { NavOn, setNavOn } = useStore();

    interface springProps {
        position?: string;
        transform?: string;
    }

    const first = useSpring<springProps>({
        position: "absolute",
        transform: NavOn
            ? "translate(15px, 35px) rotate(-45deg)"
            : "translate(10px, 8px) rotate(0deg)",
    });
    const second = useSpring<springProps>({
        position: "absolute",
        transform: NavOn
            ? "translate(20px, 7px) rotate(45deg)"
            : "translate(10px, 20px) rotate(0deg)",
    });
    const third = useSpring<springProps>({
        position: "absolute",
        transform: NavOn
            ? "translate(15px, 35px) rotate(-45deg)"
            : "translate(10px, 32px) rotate(0deg)",
    });
    const bg = useSpring({
        backgroundColor: NavOn
            ? "hsla(350, 0%, 50%, 0.7)"
            : "hsla(350, 0%, 0%, 0.05)",
    });

    return (
        <Wrap>
            {NavOn ? <BoxX></BoxX> : null}
            <Box onClick={() => setNavOn(!NavOn)} style={bg}>
                <Lines>
                    <OneLine style={first} />
                    <OneLine style={second} />
                    <OneLine style={third} />
                </Lines>
            </Box>
        </Wrap>
    );
};

export default Burger;

const Wrap = styled.div`
    transform: scale(0.7);
`;

const Box = styled(animated.div)`
    position: relative;
    width: 62px;
    height: 47px;
    margin: 0 5px;

    border: 2px hsla(340, 0%, 70%, 1);
    border-radius: 2px;
    cursor: pointer;

    :hover {
        border: 2px hsla(340, 0%, 100%, 1);
        svg {
            transition: 0.01s;
            fill: hsla(350, 0%, 100%, 1);
        }
    }
`;

const Lines = styled.svg`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    transition: 0.8s;
    fill: hsla(38, 100%, 60%, 1);

    viewbox: 0 0 44 44;
`;

const OneLine = styled(animated.rect)`
    width: 40px;
    height: 4px;

    transform: translate(0px, 0px) rotate(0deg);
`;

const BoxX = styled(Box)`
    position: absolute;
    z-index: 99999999999999;
`;
