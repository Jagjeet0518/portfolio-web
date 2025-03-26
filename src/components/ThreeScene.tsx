"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;
      const loader = new GLTFLoader();
      loader.load("/laptop.glb", (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.05, 0.05, 0.05);
        model.rotateX(.4);
        model.rotateY(-.2)
        model.castShadow = true;
        scene.add(model);
        camera.position.y = 0;
        camera.position.x = -10;
        camera.position.z = 20;
        scene.add(camera);
        const light = new THREE.DirectionalLight(0xffffff, 5);
        light.position.set(0, 2, 1);
        scene.add(light);
        renderer.render(scene, camera);
      });
    }
  }, []);
  return <div ref={containerRef} className='w-full h-full' />;
};
export default ThreeScene;