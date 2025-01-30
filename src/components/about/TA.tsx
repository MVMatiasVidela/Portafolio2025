'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Modal from '@/components/Modal/Modal';

const TA = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setOpenModalIndex(index);
  };

  const closeModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <div className="bg-black/60  gap-[10%] flex  p-12 rounded-xl border space-y-4">
      <div className="">
        <h2 className="text-[30px] font-bold">Teacher Assistant</h2>
        <p className="text-[20px] text-gray-400">
          He tenido el privilegio de compartir mis conocimientos con alumnos del
          bootcamp.
        </p>
        <p className="text-[20px] text-gray-400">
          {' '}
          Me apasiona conectar con la audiencia y fomentar el aprendizaje
          colaborativo.
        </p>
        <div className="border sm:w-[30%] md:w-[30%] lg:w-[40%] rounded-3xl p-2 text-center mt-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-700/50">
          <p
            onClick={() => openModal(1)}
            className="cursor-pointer font-medium"
          >
            Ver certificado
          </p>
        </div>

        <Modal isOpen={openModalIndex === 1} onClose={closeModal}>
          <Image width="700" height="600" src="" alt="Certificado" />
        </Modal>
        <div className="flex mt-4">
          <Image
            className="rounded"
            src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729634150/Henri_tgxhxc.png"
            alt="Henry"
            width={250}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default TA;
