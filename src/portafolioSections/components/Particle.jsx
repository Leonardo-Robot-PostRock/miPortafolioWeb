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

export const ParticlesComponent = (props) => {
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
            enable: true,
            mode: 'repulse'
          },
          onHover: {
            enable: true,
            mode: 'bounce'
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.5
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
          color: '#ffffff',
          distance: 150,
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
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 20
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
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles className="h-screen" id={props.id} init={particlesInit} loaded={particlesLoaded} options={options} />
  );
};
