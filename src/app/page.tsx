import { Contact } from '@/components/contact/Contact';

import Headline from '@/components/home/headline/headline';
import AboutHome from '@/components/home/landing/AboutHome';
import MadeWith from '@/components/home/landing/MadeWith';
import { ProyectsHome } from '@/components/home/landing/ProyectsHome';
import BlurFade from '@/components/ui/blur-fade';

export default function Home() {
  return (
    <div>
      <BlurFade delay={0.25} inView>
        <Headline />
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <AboutHome />
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <ProyectsHome />
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <Contact />
      </BlurFade>
      <MadeWith />
    </div>
  );
}
