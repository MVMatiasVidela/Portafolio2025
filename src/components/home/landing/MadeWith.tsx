import Image from 'next/image';
import React from 'react'

const MadeWith = () => {
  return (
    <div className="flex flex-col justify-center items-center my-[10%] gap-4">
      <h2 className="text-[40px] font-bold">Hecho con</h2>
      <div className="flex gap-12">
        <Image
          width="150"
          height="150"
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729538261/next-js_kdayd4.svg"
          alt="nextjs"
        />

        <Image
          width="80"
          height="80"
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729538135/icons8-viento-de-cola-css_xath9s.svg"
          alt="tailwind_css"
        />

        <Image
          width="150"
          height="150"
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729538259/typescript_fndwcr.svg"
          alt="typescript"
        />
        <Image
          width="150"
          height="150"
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729538260/react_rjafad.svg"
          alt="React"
        />
      </div>
    </div>
  );
}

export default MadeWith
