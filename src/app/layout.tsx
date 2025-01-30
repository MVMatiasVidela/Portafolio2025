import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Circles from '@/components/circles/circles';
import Navbar from '@/components/navbar/navbar';
// import ThemeToggle from '@/components/theme/Theme'; // Importar el componente
import Footer from '@/components/footer/Footer';
import Head from 'next/head';
// import Gradient from '@/components/circles/Gradient';
// import Logo from '@/components/Logo/Logo';

const inter = Inter({ weight: 'variable', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matias Videla',
  description: 'Portafolio oficial',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body className={`${inter.className} select-none antialiased relative`}>
        {/* <div className="absolute -z-10 top-[-300px] left-[60%] transform -translate-x-1/2">
          <Gradient />
        </div> */}
        <Circles />

        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
