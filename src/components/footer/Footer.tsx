import React from 'react';
import Social from '../social/social';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex justify-between mx-[5%] mb-4">
      &copy; 2025 / Matias Videla / Portafolio
      <div className="flex gap-4">
        <Image
          width="60"
          height="60"
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729538261/next-js_kdayd4.svg"
          alt="nextjs"
        />

        <Image
          width="30"
          height="30"
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729538135/icons8-viento-de-cola-css_xath9s.svg"
          alt="tailwind_css"
        />

        <Image
          width="70"
          height="70"
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729538259/typescript_fndwcr.svg"
          alt="typescript"
        />
        <Image
          width="60"
          height="60"
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729538260/react_rjafad.svg"
          alt="React"
        />
      </div>
      <Social />
    </div>
  );
};

export default Footer;
