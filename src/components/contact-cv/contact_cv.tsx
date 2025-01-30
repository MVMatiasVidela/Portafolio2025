import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import FileDownloadTwoToneIcon from '@mui/icons-material/FileDownloadTwoTone';
import ShimmerButton from '@/components/ui/shimmer-button';
import ShinyButton from '@/components/ui/shiny-button';

const Contact_cv = () => {
  return (
    <div className="flex gap-8 ">
      <Link
        href="mailto:matias.damian.vi@gmail.com?subject=Consulta%20desde%20el%20portafolio&body=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20ti..."
        rel="noopener noreferrer"
        target="_blank"
      >
        <ShinyButton className="p-3 ">
          <span className="whitespace-pre-wrap text-center  text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Contáctame
          </span>
        </ShinyButton>
      </Link>
      <Link
        href="/docs/MatiasVidela-CV-FullStackDeveloper.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShinyButton className="p-3 ">
          {' '}
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight dark:text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Descargar CV
          </span>
          <FileDownloadTwoToneIcon />
        </ShinyButton>
      </Link>
    </div>
  );
}

export default Contact_cv
