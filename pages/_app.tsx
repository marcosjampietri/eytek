import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import useStore from "../store";
import { useEffect } from "react";

import Dom from "../components/layout/dom";
import Loading from "../components/Loading";
import dynamic from "next/dynamic";
import "../styles/index.css";

const Canvas = dynamic(() => import("../components/layout/canvas"), {
    ssr: false,
});
import Menu from "../components/Menu";

const AppLayout = ({ children }: any) => {
    // We assume the DOM comes first, then canvas
    // And they can even alternate if they want (DOM, Canvas, DOM, Canvas)
    const newChildren = React.Children.map(children, (child, index) =>
        index % 2 === 0 ? <Dom>{child}</Dom> : <Canvas>{child}</Canvas>
    );

    return newChildren;
};

function App({ Component, pageProps = { title: "index" } }: AppProps) {
    const router = useRouter();
    const { setRouter } = useStore();
    const { Loading: Ldn } = useStore();

    useEffect(() => {
        setRouter(router);
    }, [setRouter, router]);

    // Get the children from each page so we can split them
    //@ts-ignore
    const children = Component(pageProps).props.children;

    return (
        <>
            <Menu />
            <Loading />
            <AppLayout>{children}</AppLayout>
        </>
    );
}

export default App;
