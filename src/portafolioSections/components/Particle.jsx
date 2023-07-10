import React, { lazy } from 'react';
import { loadFull } from 'tsparticles';
import iconImages from '../../utils/icons';
const Particles = lazy(() => import('react-particles'));

const LoadingFallback = () => <div className="font-Raleway text-2xl">Loading particles...</div>;

export const ParticlesComponent = React.memo(({ count, darkMode, zIndex, id }) => {
  let color = '#38bdf8';

  const shapeOptions = {
    type: 'images',
    image: Object.values(iconImages).map((src) => ({
      src,
      height: 32,
      width: 32
    }))
  };

  const options = {
    background: {
      color: {
        value: darkMode
      }
    },
    fpsLimit: 30,
    interactivity: {
      detect_on: 'canvas',
      events: {
        onClick: {
          enable: true,
          mode: count !== 0 ? 'pause' : 'remove'
        },
        onHover: {
          enable: true,
          mode: 'repulse',
          parallax: { enable: count !== 2 ? false : true, force: 60, smooth: 10 }
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
        color,
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
          area: count === 3 ? 800 : 1100
        },
        value: count === 2 ? 20 : 35
      },
      shape: shapeOptions,
      size: {
        value: { min: 15, max: 25 }
      },
      opacity: {
        value: zIndex !== false && count !== 3 ? 0.3 : 1
      }
    },
    detectRetina: true
  };

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      className="absolute h-screen w-full"
      id={id}
      init={particlesInit}
      options={options}
      fallback={<LoadingFallback />}
    />
  );
});
