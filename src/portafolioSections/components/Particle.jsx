import React, { useCallback, useMemo } from 'react';

import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

import node from '../../assets/icons/node.svg';
import javaScript from '../../assets/icons/javaScript.svg';
import css from '../../assets/icons/css.svg';
import primeng from '../../assets/icons/primeng.svg';
import materialUi from '../../assets/icons/materialUi.svg';
import html from '../../assets/icons/html.svg';
import tailwind from '../../assets/icons/tailwindcss.svg';
import bootstrap from '../../assets/icons/bootstrap.svg';
import webpack from '../../assets/icons/webpack.svg';
import angular from '../../assets/icons/angular.svg';
import primeflex from '../../assets/icons/primeflex.svg';
import mongodb from '../../assets/icons/mongodb.svg';
import sql from '../../assets/icons/sql.png';
import vite from '../../assets/icons/vite.svg';
import angularMaterial from '../../assets/icons/angularMaterial.svg';
import react from '../../assets/icons/react.svg';

export const ParticlesComponent = (props) => {
  let color = '#38bdf8';

  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: props.darkMode
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      fullScreen: {
        enable: false
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: color,
          distance: 200,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          directions: 'none',
          enable: true,
          outModes: {
            default: 'bounce'
          },
          random: true,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 25
        },
        opacity: {
          value: 0.3
        },
        shape: {
          type: 'images',
          image: [
            {
              src: node,
              height: 32,
              width: 32
            },
            {
              src: sql,
              height: 32,
              width: 32
            },
            {
              src: mongodb,
              height: 32,
              width: 32
            },
            {
              src: css,
              height: 32,
              width: 32
            },
            {
              src: javaScript,
              height: 32,
              width: 32
            },
            {
              src: react,
              height: 32,
              width: 32
            },
            {
              src: materialUi,
              height: 32,
              width: 32
            },
            {
              src: html,
              height: 32,
              width: 32
            },
            {
              src: vite,
              height: 32,
              width: 32
            },
            {
              src: materialUi,
              height: 32,
              width: 32
            },
            {
              src: primeng,
              height: 32,
              width: 32
            },
            {
              src: angularMaterial,
              height: 32,
              width: 32
            },
            {
              src: tailwind,
              height: 32,
              width: 32
            },
            {
              src: webpack,
              height: 32,
              width: 32
            },
            {
              src: angular,
              height: 32,
              width: 32
            },
            {
              src: bootstrap,
              height: 32,
              width: 32
            },
            {
              src: primeflex,
              height: 32,
              width: 100
            }
          ]
        },
        size: {
          value: { min: 20, max: 35 }
        }
      },
      detectRetina: true
    };
  });

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      className="h-screen w-screen"
      id={props.id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};
