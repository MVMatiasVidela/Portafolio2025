import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';

const reviews = [
  {
    name: 'Adaptabilidad',
  },
  {
    name: 'Empatía',
  },
  {
    name: 'Trabajo en equipo',
  },
  {
    name: 'Resolución de problemas',
  },
  {
    name: 'Comunicación efectiva',
  },
  {
    name: 'Liderazgo',
  },
  {
    name: 'Creatividad',
  },
  {
    name: 'Autonomía',
  },
  {
    name: 'Motivación',
  },
  {
    name: 'Orientación a resultados',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
 
}: {
  name: string;
 
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-full border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:bg-blueA-100/30 border-blueA-300 dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <p className=" ">{name}</p>
      </div>
    </figure>
  );
};

export function Skills() {
  return (
    <div className="relative flex  flex-col items-center justify-center overflow-hidden rounded-xl m-[5%] border bg-background md:shadow-xl p-12">
      <h2 className="text-[30px] font-bold mb-8">Habilidades Blandas</h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map(review => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map(review => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
