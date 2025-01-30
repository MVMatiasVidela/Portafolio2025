import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Profile = () => {
  return (
    <div className="bg-black/60 m-[5%] gap-[10%] flex mt-[7%] p-12 rounded-xl border space-y-4">
      <div>
        <h2 className="text-[60px] font-extrabold">Matías Videla</h2>
        <p className="text-[20px] text-gray-400">
      Desde Argentina y mi paso por Chile me han llevado a involucrarme en el mundo de la tecnologia, hoy me encuentro en España especializandome en las tecnologias que he adquirido, firmemente dia a dia para cumplir exitosamente cada uno de mis objetivos.
        </p>
        <Image
          src="https://res.cloudinary.com/dseutp7hi/image/upload/v1734033559/modern-world-map-holograph-on-technology-background-vector-removebg-preview_maqnkx.png"
          alt="Profile"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="bg-gradient-to-tr from-[#27489b00] to-blueA-100 rounded-xl">
          <Image
            src="https://res.cloudinary.com/dseutp7hi/image/upload/v1729621486/Group_4_gj42ez.png"
            alt="Profile"
            width={800}
            height={800}
          />
        </div>
        <div className="flex gap-4 ">
          <Link
            href="mailto:matias.damian.vi@gmail.com?subject=Consulta%20desde%20el%20portafolio&body=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20ti..."
            rel="noopener noreferrer"
            target="_blank"
          >
            <EmailIcon />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mvmatiasvidela/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://github.com/MVMatiasVidela"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC7kEf36fUHfsP8msa6oiygA"
            rel="noopener noreferrer"
            target="_blank"
          >
            <YouTubeIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
