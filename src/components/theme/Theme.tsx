'use client'
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Obtener el tema almacenado en localStorage, si existe
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'dark' | 'light');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Si no hay tema almacenado, activar el modo oscuro por defecto
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div >
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10"
      >
        <img
          src={`/svg/${
            theme === 'dark' ? 'theme-light.svg' : 'theme-dark.svg'
          }`} // Cambia el nombre del archivo según corresponda
          alt="Toggle Theme"
          className="w-full h-full"
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
