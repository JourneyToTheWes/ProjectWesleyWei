/*
Ocean Plane Geometry taken from 
https://stackoverflow.com/questions/67611934/how-to-create-water-in-react-three-fiber
*/
import React, { useRef, useMemo } from "react";
import { extend, useThree, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { Water } from "three/examples/jsm/objects/Water.js";

extend({ Water });

const Ocean = () => {
    const ref = useRef();
    const gl = useThree((state) => state.gl);
    const waterNormals = useLoader(
        THREE.TextureLoader, "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
    );


    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
    const geom = useMemo(() => new THREE.PlaneGeometry(30000, 30000), []);
    const config = useMemo(
        () => ({
        textureWidth: 512,
        textureHeight: 512,
        waterNormals,
        sunDirection: new THREE.Vector3(0.70707, 0.70707, 0),
        sunColor: 0x7F7F7F,
        waterColor: 0x555555,
        distortionScale: 40,
        fog: false,
        format: gl.encoding,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [waterNormals]
    );
    useFrame(
        (state, delta) => (ref.current.material.uniforms.time.value += delta)
    );
    return (
        <water
        ref={ref}
        args={[geom, config]}
        rotation-x={-Math.PI / 2}
        position={[0, 0, 0]}
        />
    );
}

export default Ocean;