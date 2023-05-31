import React, { useCallback, useMemo, lazy, Suspense, useEffect } from 'react';

import { loadFull } from 'tsparticles';
import iconImages from '../utils/icons';

const LazyParticles = lazy(() => import('react-particles'));

const LoadingFallback = () => <div>Loading...</div>;

export const ParticlesComponent = (props) => {
  let color = '#38bdf8';

  //map icons

  const shapeOptions = useMemo(() => {
    return {
      type: 'images',
      image: Object.values(iconImages).map((src) => ({
        src,
        height: 32,
        width: 32
      }))
    };
  }, []);

  //Particle options

  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: props.darkMode
        }
      },
      fpsLimit: 30,
      interactivity: {
        detect_on: 'canvas',
        events: {
          onClick: {
            enable: true,
            mode: props.count !== 1 ? 'pause' : 'remove'
          },
          onHover: {
            enable: true,
            mode: 'repulse',
            parallax: { enable: props.count !== 1 ? false : true, force: 60, smooth: 10 }
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 150,
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
          color: color,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 0.5
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
          speed: 2,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: props.count === 0 ? 700 : 1100
          },
          value: props.count === 2 ? 20 : 50
        },
        shape: shapeOptions,
        size: {
          value: { min: 15, max: 30 }
        },
        opacity: {
          value: props.zIndex !== false && props.count !== 3 ? 0.1 : 1
        }
      },
      detectRetina: true
    };
  }, [props.zIndex, props.count, shapeOptions]);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <LazyParticles className="absolute h-screen w-full" id={props.id} init={particlesInit} options={options} />
    </Suspense>
  );
};
