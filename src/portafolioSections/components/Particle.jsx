import React, { useCallback, useMemo, lazy, Suspense } from 'react';

import { loadFull } from 'tsparticles';
import iconImages from '../utils/icons';

const LazyParticles = lazy(() => import('react-particles'));

const LoadingFallback = () => <div>Loading...</div>;

export const ParticlesComponent = (props) => {
  let color = '#38bdf8';

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

  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: props.darkMode
        }
      },
      fpsLimit: 30,
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
            distance: 150,
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
          speed: 2,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 30
        },
        opacity: {
          value: 0.6
        },
        shape: shapeOptions,
        size: {
          value: { min: 25, max: 30 }
        }
      },
      detectRetina: true
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <LazyParticles className="h-screen w-screen" id={props.id} init={particlesInit} options={options} />
    </Suspense>
  );
};
