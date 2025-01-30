import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Image
        width={100}
        height={100}
        alt="Logo"
        src="https://res.cloudinary.com/dseutp7hi/image/upload/v1730581627/logo_pvkfjg.png"
      />
    </div>
  );
}

export default Logo
