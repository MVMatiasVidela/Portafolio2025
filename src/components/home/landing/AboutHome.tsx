import ShinyButton from '@/components/ui/shiny-button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { BorderBeam } from '@/components/ui/border-beam';

const AboutHome = () => {
  return (
    <div className="relative bg-black/60 m-[5%] gap-[10%] flex mt-[15%] p-12 rounded-xl border space-y-4">
      
      <div className="w-[70%]">
        <div className="border dark:bg-blueA-400/30 border-blueA-300 w-[40%] rounded-full px-4 py-2">
          <h2 className="text-[30px] font-bold">Programación</h2>
        </div>
        <div className="mt-[10%] ">
          <p className="text-[20px] text-gray-400">
            En cada proyecto que emprendo, mi propósito es fusionar de manera
            equilibrada la estética, la funcionalidad y la eficiencia, para
            ofrecer soluciones que no solo cubran las necesidades del usuario,
            sino que también generen un valor tangible para el negocio. Mi
            enfoque es lograr un impacto positivo y duradero, asegurando que
            cada detalle esté orientado a potenciar tanto la experiencia del
            usuario como los resultados comerciales.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/about">
            <ShinyButton>
              <div className="flex justify-center items-center ">
                <Image
                  alt="Image"
                  src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729352638/Dise%C3%B1o_sin_xzdfgt%C3%ADtulo_pczp1e.png"
                  height={35}
                  width={35}
                  className="rounded-full border"
                />
                <p className="ml-4 mr-1">Acerca de mí</p>
                <ArrowOutwardIcon fontSize="small" />
              </div>
            </ShinyButton>
          </Link>
        </div>
      </div>
      <div className="w-[50%]">
        <Image
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729533189/contenido_principal_2_hkisxq.png"
          alt="Image"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}

export default AboutHome
