import useStore from "../store";
import dynamic from "next/dynamic";

import NavBar from "../components/NavBar";
import MiniMap from "../components/Home/Map";
import Titles from "../components/Home/Titles";

const Home = dynamic(() => import("../components/Home/index"), {
    ssr: false,
});
// import Shader from '@/components/canvas/ShaderExample/ShaderExample'

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49

// DOM elements here
const DOM = () => {
    return (
        <>
            <NavBar />
            <Titles />
            <MiniMap />
        </>
    );
};

// Canvas/R3F components here
const R3F = () => {
    // Example of using the router to change pages
    // It can also be inside R3F component (see `two.tsx` and `Box.tsx`)
    const { router } = useStore();

    return (
        <>
            <Home />
        </>
    );
};

export default function Page() {
    return (
        <>
            <DOM />
            <R3F />
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            title: "Welcome!",
        },
    };
}
