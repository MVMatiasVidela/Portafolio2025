'use client';
import Iphone15Pro from '@/components/ui/iphone-15-pro';
import { MagicCard } from '@/components/ui/magic-card';
import Safari from '@/components/ui/safari';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useState } from 'react';

export function ProyectsHome() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  return (
    <div className={'grid grid-cols-2 gap-8 m-[5%] '}>
      <MagicCard
        className="cursor-pointer  shadow dark:shadow-[#D9D9D955]  p-8"
        gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
      >
        <div>
          <Image
            alt="Dentall"
            src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729366677/Dentall_y3kzgg.png"
            width={200}
            height={200}
          />
        </div>
        <div className="p-4 mt-[20%] ">
          <h2 className="text-[30px] font-bold ">
            Sistema de gestion de citas para clinica odontologica
          </h2>
        </div>
      </MagicCard>

      <MagicCard
        className="cursor-pointer flex shadow dark:shadow-[#D9D9D955] p-12  "
        gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
      >
        <div className="flex gap-4">
          <h2 className="  text-[30px] font-bold  ">
            Ver mas sobre el proyecto
          </h2>
          <div className="flex justify-center items-center">
            <ArrowForwardIcon fontSize="large" />
          </div>
        </div>
        <div className="flex mt-[20%]">
          <div className="flex w-[80%]  justify-center items-center">
            <Safari
              src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729367812/PFhenry_jihatc.png"
              url="magicui.design"
              className="size-full"
            />
          </div>
          <div className="flex w-[30%] bottom-0 right-0 absolute  justify-center items-center">
            <Iphone15Pro
              src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729523787/Dise%C3%B1o_sin_t%C3%ADtulo_xtblha.png"
              className="size-full"
            />
          </div>
        </div>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex shadow dark:shadow-[#D9D9D955] p-12  "
        gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
      >
        <div className="flex gap-4">
          <h2 className="  text-[30px] font-bold  ">
            Ver mas sobre el proyecto
          </h2>
          <div className="flex justify-center items-center">
            <ArrowForwardIcon fontSize="large" />
          </div>
        </div>
        <div className="flex mt-[20%]">
          <div className="flex w-[80%]  justify-center items-center">
            <Safari
              src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729367812/modulo4_yszlww.png"
              url="magicui.design"
              className="size-full"
            />
          </div>
          <div className="flex w-[30%] bottom-0 right-0 absolute  justify-center items-center">
            <Iphone15Pro
              src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729523213/Imagen_de_WhatsApp_2024-10-21_a_las_17.05.53_65d63539_r1qzul.jpg"
              className="size-full"
            />
          </div>
        </div>
      </MagicCard>
      <MagicCard
        className="cursor-pointer  shadow dark:shadow-[#D9D9D955]  p-8"
        gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
      >
        <div>
          <Image
            alt="Dentall"
            src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729366676/Technovid_phby1h.png"
            width={200}
            height={200}
          />
        </div>
        <div className="p-4 mt-[20%] ">
          <h2 className="text-[30px] font-bold ">
            Plataforma E-commerce para venta de productos Apple
          </h2>
        </div>
      </MagicCard>
    </div>
  );
}
