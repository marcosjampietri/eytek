import React from "react";
import useStore from "../../store/";
import dynamic from "next/dynamic";
{
    /* import { Mesh, MathUtils } from "three"; */
}
// import { A11y } from "@react-three/a11y";
import { ScrollControls, Scroll, Html } from "@react-three/drei";
// import { useControls } from "leva";
import { useSpring } from "react-spring";
import { a } from "@react-spring/three";
{
    /* import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
import { Physics, usePlane, useSphere } from "@react-three/cannon"; */
}

import Hero from "./Hero";
import Services from "./Services";
import SetPage from "./setPage";
import Circle from "./Circle";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";
const Sphere = dynamic(() => import("./Sphere"), {
    ssr: false,
});
const Background = dynamic(() => import("./Background"), {
    ssr: false,
});

const Home = () => {
    const { Page } = useStore();

    const { spring } = useSpring({
        spring: Page == 2,
    });

    const color = spring.to([0, 1], ["#6246ea", "#e45858"]);

    return (
        <>
            <a.color attach="background" args={["black"]} />
            <ScrollControls damping={10} pages={6} distance={2}>
                <Html></Html>
                <Scroll html>
                    <SetPage />
                    <Hero />
                    <Services />
                    <Works />
                    <Contact />
                    <Footer />
                    {/* <Circle /> */}
                </Scroll>
                <Scroll>
                    {/* 
                    <Sparkles
                        count={500}
                        speed={0.2}
                        opacity={0.5}
                        color={"cyan"}
                        size={1}
                        scale={10}
                        noise={10}
                    />
                    <Cloud
                        opacity={0.2}
                        speed={0.2} // Rotation speed
                        width={20} // Width of the full cloud
                        depth={1.5} // Z-dir depth
                        segments={50} // Number of particles
                    />
                    */}
                    <Sphere />
                    <Background />
                </Scroll>
            </ScrollControls>
            {/* <EffectComposer multisampling={8}>
                <Bloom
                    kernelSize={3}
                    luminanceThreshold={0}
                    luminanceSmoothing={0.4}
                    intensity={0.6}
                />
                <Bloom
                    kernelSize={KernelSize.HUGE}
                    luminanceThreshold={0}
                    luminanceSmoothing={0}
                    intensity={0.5}
                />
                <SSAO
                    samples={11}
                    radius={0.1}
                    intensity={20}
                    luminanceInfluence={0.6}
                    color="red"
                />
                <SSAO
                    samples={21}
                    radius={0.03}
                    intensity={10}
                    luminanceInfluence={0.6}
                    color="red"
                />
            </EffectComposer> */}
        </>
    );
};

export default Home;
