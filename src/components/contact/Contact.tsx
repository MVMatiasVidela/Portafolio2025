import { cn } from '@/lib/utils';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { BorderBeam } from '@/components/ui/border-beam';
import Contact_cv from '@/components/contact-cv/contact_cv';

export function Contact() {
  return (
    <div className="relative flex m-[5%] my-[10%] gap-8 items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <BorderBeam />
      <div className="text-center">
        <h2 className="text-[40px] font-bold">¿Te interesa contratarme?</h2>
        <p className="text-[20px]">
          {' '}
          ¡Hablemos y exploremos cómo puedo aportar valor a tu equipo!
        </p>
      </div>
      <div>
        <Contact_cv />
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={1}
        repeatDelay={2}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          '-inset-64 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      />
    </div>
  );
}
