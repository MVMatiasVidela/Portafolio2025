import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Cursos = () => {
  return (
    <div className="bg-black/60 flex-col gap-[10%] flex rounded-xl border space-y-4 p-12">
      <div className=" ">
        <h2 className="text-[30px] font-bold">Cursos</h2>
        <p className="text-[20px] text-gray-400">
          He realizado diferentes tipos de cursos para el desarrollo web con los
          cuales he logrado reforzar mis conocimientos.
        </p>
        <div className="border sm:w-[30%] md:w-[30%] lg:w-[40%] rounded-3xl p-1 text-center mt-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-700/50">
          <Link href="/cursos">
            <div className="flex gap-4 justify-center items-center">
              <p>Saber más</p>
              {/* <Image
                width="30"
                height="30"
                src="/images/flecha.png"
                alt="long-arrow-right"
              /> */}
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 items-center">
        <div className="hover:scale-125 transition duration-300">
          <Image
            className="rounded"
            src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729691322/henry1_wye2ei.png"
            alt="Henry"
            width={60}
            height={60}
          />
        </div>
        <div className="hover:scale-125 transition duration-300">
          <Image
            className="rounded"
            src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729691322/latam1_d4ijsg.png"
            alt="Desafio Latam"
            width={60}
            height={60}
          />
        </div>
      </div>
    </div>
  );
};

export default Cursos;
