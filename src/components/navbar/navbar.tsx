'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'; // Importa el hook correcto
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import ComputerTwoToneIcon from '@mui/icons-material/ComputerTwoTone';
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import Logo from '../Logo/Logo';
// import ThemeToggle from '../theme/Theme';

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Obtiene la ruta actual

  // Función para verificar si la ruta actual coincide
  const isActive = (path: string) => pathname === path;

  return (
    <div className=" w-[60%]  fixed z-50 top-0 left-1/2 transform -translate-x-1/2  mt-5 dark:bg-black/40 bg-blueA-100/70 text-white backdrop-blur-md border rounded-full border-blueA-100 dark:border-white/20 items-center justify-between flex py-2 px-4">
      <div>
        <Logo />
      </div>

      <ul className="flex space-x-1">
        <Link href="/">
          <li
            className={`flex justify-center items-center border p-1 px-3 rounded-full gap-2 transition-colors duration-200 ${
              isActive('/')
                ? 'bg-white/20 dark:border-white/20'
                : 'border-transparent hover:bg-white/5 hover:dark:border-white/20'
            }`}
          >
            <HomeTwoToneIcon />
            <span className="text-[20px]">Inicio</span>
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`flex justify-center items-center border p-1 px-3 rounded-full gap-2 transition-colors duration-200  ${
              isActive('/about')
                ? 'bg-white/20 dark:border-white/20'
                : 'border-transparent hover:bg-white/5 hover:dark:border-white/20'
            }`}
          >
            <AccountBoxTwoToneIcon />
            <span className="text-[20px]">Sobre mí</span>
          </li>
        </Link>
        <Link href="/cursos">
          <li
            className={`flex justify-center items-center border p-1 px-3 rounded-full gap-2 transition-colors duration-200 ${
              isActive('/cursos')
                ? 'bg-white/20 dark:border-white/20'
                : 'border-transparent hover:bg-white/5 hover:dark:border-white/20'
            }`}
          >
            <BackupTableTwoToneIcon />
            <span className="text-[20px]">Cursos</span>
          </li>
        </Link>
        <Link href="/proyects">
          <li
            className={`flex justify-center items-center border p-1 px-3 rounded-full gap-2 transition-colors duration-200 ${
              isActive('/proyects')
                ? 'bg-white/20 dark:border-white/20'
                : 'border-transparent hover:bg-white/5 hover:dark:border-white/20'
            }`}
          >
            <ComputerTwoToneIcon />
            <span className="text-[20px]">Proyectos</span>
          </li>
        </Link>
      </ul>
      {/* <div>
        <ThemeToggle />
      </div> */}
    </div>
  );
};

export default Navbar;
