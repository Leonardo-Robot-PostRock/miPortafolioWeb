import { ParticlesComponent } from '../components/Particle';

import React from 'react';

export const Skills = (darkMode) => {
  return (
    <div className="h-screen" id="skills">
      <ParticlesComponent darkMode={darkMode} id="tsparticles" />
    </div>
  );
};
