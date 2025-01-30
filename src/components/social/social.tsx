import Link from 'next/link';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Social = () => {
  return (
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
  );
};

export default Social;
