import Cursos from '@/components/about/Cursos';
import Practices from '@/components/about/practices';
import Profile from '@/components/about/Profile';
import { Skills } from '@/components/about/Skills';
import TA from '@/components/about/TA';
import Technologies from '@/components/about/Technologies/Tecnologies';
import Tools from '@/components/about/Tools/Tools';
import { Contact } from '@/components/contact/Contact';
import BlurFade from '@/components/ui/blur-fade';
import React from 'react';

const page = () => {
  return (
    <div>
      <Profile />
      <div className="grid-cols-2 grid m-[5%] gap-4">
        <Cursos />
        <TA />
        <Technologies />
        <Tools />
      </div>
      <Practices />
      <Skills />
      <BlurFade delay={0.25} inView>
        <Contact />
      </BlurFade>
    </div>
  );
};

export default page;
