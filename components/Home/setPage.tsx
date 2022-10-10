import { useState, useEffect } from "react";
import useStore from "../../store";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useDebounce } from "use-debounce";
import { debounce } from "debounce";

import React from "react";

const SetPage = () => {
    const [page, setpage] = useState(0);
    const { setPage } = useStore();

    const data: any = useScroll();

    useEffect(() => {
        setPage(page);
    }, [page]);

    useFrame((state, delta) => {
        // data.offset = current scroll position, between 0 and 1, dampened
        // data.delta = current delta, between 0 and 1, dampened

        // Will be 0 when the scrollbar is at the starting position,
        // then increase to 1 until 1 / 3 of the scroll distance is reached
        const a = data.range(0, 1 / 5, 0);
        // Will start increasing when 1 / 6 of the scroll distance is reached,
        // and reach 1 when it reaches 2 / 6rds.
        const b = data.range(0.5 / 5, 2 / 5, 0);
        const c = data.range(2.5 / 5, 1 / 5, 0);
        const d = data.range(3.5 / 5, 2 / 5, 0);

        if (a || a == 0) {
            setpage(1);
        }
        if (b) {
            setpage(2);
        }
        if (c) {
            setpage(3);
        }
        if (d) {
            setpage(4);
        }
    });

    return <></>;
};

export default SetPage;
