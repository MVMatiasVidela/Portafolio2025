import Image from 'next/image';
import React from 'react';

const Practices = () => {
  return (
    <div className="bg-blue-950 m-[5%] gap-[10%] flex mt-[7%] p-12 rounded-xl border space-y-4">
      <div>
        <h2 className="text-[30px] font-bold">Pasantias</h2>
        <p className="text-[20px] text-gray-400">
          Realice pasantias de 3 meses en Innevo Chile donde desarrolle mis habilidades como Full Stack y adquiri valiosa expreiencia desarrollando con Angular y Material Angular.
        </p>
      </div>
      <Image
        width="500"
        height="100"
        src=" https://res.cloudinary.com/dseutp7hi/image/upload/v1734034955/Captura_de_pantalla_2024-12-12_212032-removebg-preview_fx2jct.png"
        alt="long-arrow-right"
      />
    </div>
  );
};

export default Practices;
