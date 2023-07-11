import React from 'react';

import { ReactComponent as Twitter } from './../../assets/icons/social/twitter.svg';
import { ReactComponent as Github } from './../../assets/icons/social/github.svg';
import { ReactComponent as Linkedin } from './../../assets/icons/social/linkedin.svg';
import { SocialMediaIcon } from '../../ui/components/SocialMediaIcon';

export const Footer = () => {
  return (
    <div className="grid grid-rows-2 h-full items-center place-items-center gap-1 bg-white dark:bg-neutral-950 shadow-md">
      <h4 className='row-span-1'>Con mucho ❤ y esfuerzo por Leonardo</h4>
      <div className='flex row-span-1 mb-2 gap-6'>
        <SocialMediaIcon
          link="https://twitter.com/LeonardoPu65507"
          icon={Twitter}
          alt="red social Twitter"
        />
        <SocialMediaIcon
          link="https://github.com/Leonardo-Robot-PostRock?tab=repositories"
          icon={Github}
          alt="repositorio Github"
        />
        <SocialMediaIcon
          link="https://www.linkedin.com/in/leonardo-puebla-1a2b71229/"
          icon={Linkedin}
          alt="red social Linkedin"
        />
      </div>
    </div>
  );
};
