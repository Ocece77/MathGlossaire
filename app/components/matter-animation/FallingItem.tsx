'use client';
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { images } from '@/public/export/images';

const FallingItem = () => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const imagesArray = [
    images.divide,
    images.minus,
    images.percent,
    images.plus,
    images.square,
    images.superscript,
  ];

  const {
    Engine,
    Render,
    Runner,
    Bodies,
    Composite,
    World,
    MouseConstraint,
    Mouse,
  } = Matter;

  const initScene = () => {
    if (
      !sceneRef.current ||
      window.innerWidth > 1800 ||
      window.innerWidth < 769
    )
      return; // Vérifie que sceneRef.current est non-null avant de procéder

    // Créer une nouvelle instance d'engine et de world
    const engine = Engine.create();
    const world = engine.world;

    // Créer un rendu
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight * 2,
        background: 'transparent',
        wireframes: false,
      },
    });

    // Créer des murs et un sol
    const wallLeft = Bodies.rectangle(
      0,
      window.innerHeight,
      10,
      window.innerHeight * 2,
      {
        isStatic: true,
        label: 'wallLeft',
        render: { fillStyle: 'transparent' },
      },
    );
    const wallRight = Bodies.rectangle(
      window.innerWidth,
      window.innerHeight,
      10,
      window.innerHeight * 2,
      {
        isStatic: true,
        label: 'wallRight',
        render: { fillStyle: 'transparent' },
      },
    );
    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight,
      window.innerWidth,
      1,
      { isStatic: true, label: 'ground', render: { fillStyle: 'transparent' } },
    );

    // Ajouter les murs et le sol au monde
    Composite.add(world, [wallLeft, wallRight, ground]);

    // Créer des stickers
    const createStickers = () => {
      const size = 30;
      const stickerTexture =
        imagesArray[Math.floor(Math.random() * imagesArray.length)];

      const sticker = Bodies.circle(
        Math.random() * window.innerWidth,
        -30,
        30,
        {
          friction: 0.001,
          restitution: 0.3, // élasticité
          inertia: Infinity, // empêche la rotation
          frictionAir: 0.01,
          render: {
            sprite: {
              texture: stickerTexture,
              xScale: size / 150,
              yScale: size / 150,
            },
          },
        },
      );

      return sticker;
    };

    // Ajouter un sticker toutes les 300ms
    const stickerInterval = setInterval(() => {
      World.add(world, createStickers());
    }, 30);

    setTimeout(() => {
      clearInterval(stickerInterval);
    }, 1500);

    // Ajouter un événement pour détecter les mouvements de la souris
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.8,
        render: { visible: false },
      },
    });

    // Ajouter le contrainte de souris au monde
    World.add(world, mouseConstraint);

    // Exécuter le moteur et le rendu
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Nettoyage du timer lors du démontage du composant
  };

  // Gérer le redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      initScene(); // Réinitialise la scène à chaque redimensionnement
    };

    window.addEventListener('resize', handleResize);

    // Initialiser la scène lors du premier rendu
    initScene();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Scène Matter.js */}
      <div ref={sceneRef} className="absolute w-full h-full z-0"></div>
    </div>
  );
};

export default FallingItem;
