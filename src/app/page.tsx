"use client";
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

export default function Home() {
    return (
        <div
            className="bg-slate-200 h-screen overflow-hidden flex justify-center items-center w-full tracking-tighter text-white">
            <ShaderGradientCanvas
                importedFiber={{...fiber, ...drei, ...reactSpring}}
                style={{
                    position: "absolute",
                    top: 0,
                    pointerEvents: "none",
                    height: "100vh",
                }}
            >
                <ShaderGradient
                    control="query"
                    urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23005180&color2=%23ca00ac&color3=%23000721&destination=onCanvas&embedMode=off&envPreset=lobby&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0.4&uDensity=1.5&uFrequency=0&uSpeed=0.2&uStrength=1.8&uTime=8&wireframe=false"
                />
            </ShaderGradientCanvas>

            <div className="fixed p-4 gap-4 flex items-center justify-center w-full flex-col">
                <h1>Anton Sukhorada</h1>

                <div className="flex gap-2">
                    <h2>Software Engineer</h2>
                    <h2>from</h2>
                    <h2>Kyiv</h2>
                </div>
            </div>

            <div className="fixed bottom-0 p-4 justify-center flex w-full gap-2">
                <div className="flex gap-2">
                    <a href="https://github.com/AntonSukhoradaDA" target="_blank">
                        Github
                    </a>
                    <a href="https://instagram.com/asukhorada" target="_blank">
                        Instagram
                    </a>
                    <a href="https://linkedin.com/in/sukhorada-anton/" target="_blank">
                        Linkedin
                    </a>
                </div>
            </div>
        </div>
    );
}