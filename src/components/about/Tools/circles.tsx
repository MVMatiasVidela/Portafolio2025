import React from 'react';
import OrbitingCircles from '@/components/ui/orbiting-circles';

export function OrbitingCirclesDemo() {
  return (
    <div className="relative z-  flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Tecnologias
      </span> */}

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent z-10"
        duration={20}
        delay={20}
        radius={80}
      >
        
        <Icons.trello/>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent z-10"
        duration={20}
        delay={5}
        radius={80}
      >
        
        <Icons.figma />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent z-10"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.cloudinary />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent z-10"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.vercel />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent z-10"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.gitHub />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent z-10"
        radius={190}
        duration={20}
        delay={15}
        reverse
      >
        <Icons.visual />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => (
    <svg width="100" height="100" viewBox="0 0 438.549 438.549">
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),
  trello: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <path
        fill="#1E88E5"
        d="M6,10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28c0,2.2-1.8,4-4,4H10c-2.2,0-4-1.8-4-4V10z"
      ></path>
      <path
        fill="#FFF"
        d="M10,12.2c0-1.2,1-2.2,2.2-2.2h7.6c1.2,0,2.2,1,2.2,2.2v21.6c0,1.2-1,2.2-2.2,2.2h-7.6C11,36,10,35,10,33.8V12.2z M26,22.8c0,1.2,1,2.2,2.2,2.2h7.6c1.2,0,2.2-1,2.2-2.2V12.2c0-1.2-1-2.2-2.2-2.2h-7.6C27,10,26,11,26,12.2V22.8z"
      ></path>
    </svg>
  ),
  cloudinary: () => (
    <svg
      width="256px"
      height="168px"
      viewBox="0 0 256 168"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M218.621451,161.618939 C215.360833,161.618939 212.325156,159.543784 211.255171,156.275009 C209.923769,152.205759 212.142772,147.826451 216.213984,146.495028 C230.962755,141.66786 240.491296,128.740696 240.491296,113.560042 C240.491296,94.3344571 224.850871,78.6917573 205.625591,78.6917573 C204.290136,78.6917573 202.853357,78.7971363 201.104499,79.0241064 L193.523411,80.0069681 L192.435188,72.4379198 C187.776295,39.9811923 159.502751,15.5048965 126.667585,15.5048965 C99.522794,15.5048965 75.3569387,31.7555519 65.1089949,56.9066786 L63.1797795,61.6386003 L58.0730327,61.7318202 C34.6042889,62.1634687 15.5107301,81.599812 15.5107301,105.056769 C15.5107301,122.180854 25.4526744,137.797209 40.8377623,144.839362 C44.7306435,146.622699 46.4430248,151.222897 44.6597165,155.11584 C42.8764081,159.008783 38.2783095,160.717138 34.3854283,158.939881 C13.4964022,149.378765 0,128.230013 0,105.056769 C0,74.9021669 23.2336713,49.6416082 52.7453988,46.5390077 C66.3431254,18.1069468 94.8416095,1.42108547e-14 126.665558,1.42108547e-14 C164.755405,1.42108547e-14 197.866173,26.7054667 206.452397,63.1949669 C233.848473,63.6387745 256,86.0622067 256,113.562069 C256,135.231636 241.94834,154.38832 221.037023,161.231874 C220.236561,161.493295 219.421913,161.618939 218.621451,161.618939 Z"
          fill="#0071CE"
        ></path>
        <path
          d="M100.01656,164.973281 C100.014536,164.971257 100.014536,164.971257 100.012512,164.971257 C100.010489,164.971257 100.008465,164.969233 100.006441,164.969233 L100.004418,164.969233 L100.002394,164.967209 L100.00037,164.965186 C100.00037,164.965186 99.9983464,164.965186 99.9983464,164.963162 L99.9963227,164.963162 L99.994299,164.961138 C99.9963227,164.959115 99.9922752,164.959115 99.9922752,164.959115 L99.9902515,164.957091 L99.9882278,164.957091 L99.9862041,164.955067 C99.9882278,164.957091 99.9841804,164.953043 99.9841804,164.953043 C99.9841804,164.953043 99.9801329,164.95102 99.9781092,164.95102 L99.9760855,164.948996 L99.9760855,164.948996 L99.9740618,164.946972 L99.9720381,164.944949 C99.9659669,164.942925 99.9679907,164.942925 99.9659669,164.942925 C99.9639432,164.944949 99.9639432,164.940901 99.9619195,164.940901 L99.9598958,164.938877 C99.9598958,164.938877 99.9578721,164.936854 99.9558484,164.936854 L99.9538246,164.93483 C99.9518009,164.932806 99.9477535,164.932806 99.9457298,164.932806 C99.9437061,164.932806 99.9396586,164.930783 99.9376349,164.930783 C99.9356112,164.928759 99.9356112,164.928759 99.9335875,164.928759 L99.9315638,164.928759 C99.9295401,164.926735 99.9275163,164.926735 99.9254926,164.926735 C99.9234689,164.924711 99.9194215,164.924711 99.9194215,164.924711 L99.9173978,164.924711 L99.9133503,164.922688 C99.9113266,164.922688 99.9113266,164.920664 99.9113266,164.920664 L99.9093029,164.920664 C99.7899037,164.878166 99.6624096,164.851858 99.5288444,164.845787 L99.524797,164.845787 L99.5207495,164.845787 L99.5167021,164.845787 C99.5167021,164.845787 99.5167021,164.845787 99.5146784,164.845787 L99.5126547,164.845787 L99.510631,164.845787 L99.5086073,164.843763 L99.5045598,164.843763 L99.5005124,164.843763 L99.4984887,164.843763 L99.496465,164.843763 L99.4944412,164.843763 L99.4903938,164.843763 L99.4883701,164.843763 L99.4903938,164.843763 L99.4883701,164.843763 L99.4863464,164.843763 L99.4843227,164.843763 L99.482299,164.843763 L99.4802752,164.843763 L99.4782515,164.843763 L99.4762278,164.843763 L99.4742041,164.843763 C96.1229314,164.843763 93.380797,162.115794 93.3605598,158.772617 L93.3605598,90.6422134 L98.5554373,90.6422134 L98.5817456,90.6422134 C99.3770658,90.6766166 99.9194215,90.0654545 99.9194215,89.3308458 C99.9194215,88.782419 99.5834847,88.312917 99.1058879,88.1166166 L74.0543148,70.8259921 C73.6050499,70.5163636 73.0121013,70.5163636 72.5628365,70.8259921 L47.314963,88.2522055 C46.8414136,88.5780237 46.6370183,89.1750198 46.8070104,89.7234466 C46.9790262,90.2718735 47.4849551,90.6442372 48.0596903,90.6442372 L53.280876,90.6442372 L53.2849235,158.79083 C53.3112318,163.50204 57.0955796,167.347099 61.9099986,167.468522 C61.9646389,167.474593 62.0172555,167.47864 62.0718958,167.47864 L99.4721804,167.47864 L99.4944412,167.47864 C99.8384729,167.472569 100.150125,167.334957 100.380829,167.114372 C100.380829,167.114372 100.380829,167.114372 100.382852,167.112348 C100.3869,167.1083 100.390947,167.104253 100.392971,167.102229 C100.394995,167.100206 100.397018,167.100206 100.399042,167.096158 L100.401066,167.094134 L100.403089,167.092111 L100.405113,167.090087 L100.407137,167.088063 L100.409161,167.08604 L100.411184,167.084016 C100.415232,167.081992 100.413208,167.081992 100.415232,167.079968 C100.415232,167.079968 100.415232,167.079968 100.417255,167.077945 L100.419279,167.075921 C100.419279,167.075921 100.419279,167.075921 100.421303,167.073897 C100.647959,166.839146 100.789619,166.521423 100.791643,166.169296 L100.791643,166.165249 L100.791643,166.163225 L100.791643,166.161202 L100.791643,166.159178 L100.791643,166.157154 L100.791643,166.15513 L100.791643,166.153107 L100.791643,166.149059 C100.781524,165.630988 100.467848,165.177676 100.01656,164.973281 Z"
          fill="#DC8327"
        ></path>
        <path
          d="M154.124635,164.973281 C154.124635,164.973281 154.122611,164.971257 154.120588,164.971257 C154.118564,164.971257 154.11654,164.969233 154.114516,164.969233 L154.112493,164.969233 L154.110469,164.967209 L154.108445,164.965186 L154.106422,164.965186 L154.104398,164.963162 L154.102374,164.961138 C154.104398,164.959115 154.10035,164.959115 154.098327,164.959115 L154.096303,164.957091 L154.094279,164.957091 C154.092256,164.957091 154.092256,164.955067 154.092256,164.955067 C154.088208,164.957091 154.088208,164.953043 154.088208,164.953043 L154.084161,164.95102 L154.082137,164.948996 L154.080113,164.948996 L154.07809,164.946972 L154.076066,164.944949 C154.074042,164.942925 154.072018,164.942925 154.072018,164.942925 C154.069995,164.944949 154.069995,164.940901 154.065947,164.940901 L154.063924,164.938877 L154.0619,164.936854 C154.0619,164.936854 154.059876,164.936854 154.057852,164.93483 C154.055829,164.932806 154.051781,164.932806 154.049758,164.932806 C154.047734,164.932806 154.043686,164.930783 154.041663,164.930783 C154.039639,164.928759 154.039639,164.928759 154.037615,164.928759 C154.035592,164.928759 154.035592,164.928759 154.033568,164.926735 C154.033568,164.926735 154.031544,164.926735 154.02952,164.924711 C154.023449,164.922688 154.027497,164.922688 154.025473,164.922688 C154.019402,164.922688 154.023449,164.922688 154.021426,164.920664 C154.021426,164.920664 154.019402,164.91864 154.017378,164.91864 L154.015354,164.916617 L154.013331,164.916617 C153.893931,164.874119 153.766437,164.84781 153.632872,164.841739 L153.628825,164.841739 L153.626801,164.841739 L153.622754,164.841739 L153.62073,164.841739 L153.618706,164.841739 L153.616682,164.841739 L153.614659,164.839715 L153.610611,164.839715 L153.606564,164.839715 L153.60454,164.839715 L153.602516,164.839715 L153.600493,164.839715 L153.596445,164.839715 L153.592398,164.839715 L153.590374,164.839715 L153.58835,164.839715 L153.586327,164.839715 L153.584303,164.839715 L153.582279,164.839715 L153.580256,164.839715 L153.578232,164.839715 L153.576208,164.839715 L153.574184,164.839715 C150.224935,164.839715 147.482801,162.111747 147.462564,158.768569 L147.462564,105.899004 L152.681726,105.899004 C152.699939,105.89698 152.714105,105.89698 152.734343,105.899004 C153.458833,105.899004 154.04571,105.312126 154.04571,104.587636 C154.04571,104.039209 153.709773,103.569708 153.232177,103.373407 L128.17858,86.0827826 C127.729315,85.7731542 127.136366,85.7731542 126.687101,86.0827826 L101.449346,103.506972 C100.975797,103.832791 100.771402,104.429787 100.941394,104.978213 C101.11341,105.52664 101.619339,105.899004 102.194074,105.899004 L107.390975,105.899004 L107.395022,158.788806 C107.417283,163.50204 111.207702,167.349123 116.024145,167.468522 C116.076761,167.474593 116.129378,167.476617 116.181995,167.476617 L153.582279,167.476617 L153.60454,167.476617 C153.948572,167.470545 154.260224,167.332933 154.490928,167.112348 C154.490928,167.112348 154.490928,167.112348 154.492951,167.110324 C154.496999,167.106277 154.505094,167.102229 154.50307,167.100206 C154.505094,167.098182 154.507117,167.098182 154.509141,167.094134 L154.511165,167.092111 L154.513188,167.090087 L154.515212,167.088063 C154.515212,167.088063 154.517236,167.088063 154.517236,167.08604 L154.51926,167.084016 C154.521283,167.084016 154.521283,167.081992 154.521283,167.081992 C154.527354,167.079968 154.525331,167.079968 154.525331,167.077945 C154.525331,167.077945 154.525331,167.077945 154.527354,167.075921 C154.527354,167.075921 154.527354,167.075921 154.529378,167.073897 C154.529378,167.073897 154.529378,167.073897 154.531402,167.071874 C154.758058,166.837123 154.899718,166.519399 154.901742,166.167273 L154.901742,166.163225 L154.901742,166.161202 L154.901742,166.159178 L154.901742,166.157154 L154.901742,166.15513 L154.901742,166.153107 L154.901742,166.151083 L154.901742,166.147036 C154.889599,165.630988 154.575924,165.177676 154.124635,164.973281 Z"
          fill="#F4B21B"
        ></path>
        <path
          d="M208.37438,164.973281 L208.370333,164.971257 C208.368309,164.971257 208.366285,164.969233 208.364262,164.969233 L208.362238,164.969233 L208.360214,164.967209 L208.358191,164.965186 C208.356167,164.965186 208.356167,164.965186 208.356167,164.963162 L208.354143,164.963162 L208.352119,164.961138 L208.350096,164.959115 C208.350096,164.959115 208.348072,164.959115 208.348072,164.957091 L208.346048,164.957091 L208.344025,164.955067 C208.342001,164.957091 208.342001,164.953043 208.339977,164.953043 C208.342001,164.95102 208.337953,164.95102 208.33593,164.95102 L208.333906,164.948996 L208.331882,164.948996 L208.329859,164.946972 L208.327835,164.944949 C208.321764,164.942925 208.323787,164.942925 208.323787,164.942925 C208.321764,164.944949 208.321764,164.940901 208.317716,164.940901 L208.315693,164.938877 C208.317716,164.936854 208.313669,164.936854 208.311645,164.936854 C208.311645,164.936854 208.309621,164.936854 208.309621,164.93483 C208.307598,164.932806 208.30355,164.932806 208.301527,164.932806 C208.299503,164.932806 208.295455,164.930783 208.293432,164.930783 L208.289384,164.928759 C208.289384,164.928759 208.287361,164.928759 208.285337,164.926735 L208.281289,164.924711 C208.275218,164.922688 208.275218,164.922688 208.277242,164.922688 C208.271171,164.922688 208.271171,164.922688 208.273195,164.920664 C208.271171,164.920664 208.271171,164.91864 208.271171,164.91864 C208.269147,164.91864 208.267123,164.916617 208.267123,164.916617 L208.2651,164.916617 C208.1457,164.874119 208.018206,164.84781 207.884641,164.841739 L207.882617,164.841739 L207.87857,164.841739 L207.872499,164.841739 L207.870475,164.841739 L207.868451,164.841739 L207.866428,164.841739 C207.864404,164.839715 207.864404,164.839715 207.86238,164.839715 L207.858333,164.839715 L207.854285,164.839715 L207.852262,164.839715 L207.850238,164.839715 L207.848214,164.839715 L207.844167,164.839715 L207.840119,164.839715 C207.840119,164.839715 207.840119,164.839715 207.838096,164.839715 L207.836072,164.839715 L207.834048,164.839715 L207.832025,164.839715 L207.830001,164.839715 L207.827977,164.839715 L207.825953,164.839715 L207.834048,164.839715 L207.832025,164.839715 C204.482776,164.839715 201.740641,162.111747 201.720404,158.768569 L201.720404,121.149723 L206.927424,121.149723 L206.953732,121.149723 C207.692388,121.13151 208.291408,120.572964 208.291408,119.838356 C208.291408,119.289929 207.955471,118.820427 207.477874,118.624126 L182.424278,101.333502 C181.977036,101.023874 181.382064,101.023874 180.932799,101.333502 L155.684926,118.757692 C155.211376,119.08351 155.006981,119.680506 155.176973,120.228933 C155.348989,120.77736 155.854918,121.149723 156.429653,121.149723 L161.636673,121.149723 L161.64072,158.788806 C161.667029,163.50204 165.455424,167.351146 170.269843,167.468522 C170.322459,167.474593 170.375076,167.476617 170.427693,167.476617 L207.827977,167.476617 L207.850238,167.476617 C208.19427,167.470545 208.505922,167.332933 208.736625,167.112348 L208.738649,167.110324 C208.742697,167.106277 208.748768,167.102229 208.748768,167.100206 C208.750791,167.098182 208.752815,167.098182 208.754839,167.094134 L208.756863,167.092111 L208.758886,167.090087 L208.76091,167.088063 L208.762934,167.08604 L208.764957,167.084016 L208.766981,167.081992 C208.773052,167.079968 208.769005,167.079968 208.771029,167.077945 C208.771029,167.077945 208.771029,167.077945 208.773052,167.075921 L208.775076,167.073897 C208.775076,167.073897 208.775076,167.073897 208.7771,167.071874 C209.003756,166.837123 209.145416,166.519399 209.14744,166.167273 L209.14744,166.163225 L209.14744,166.161202 L209.14744,166.159178 L209.14744,166.157154 L209.14744,166.15513 L209.14744,166.153107 L209.14744,166.151083 L209.14744,166.147036 C209.139345,165.630988 208.823645,165.177676 208.37438,164.973281 Z"
          fill="#F2D864"
        ></path>
      </g>
    </svg>
  ),
  visual: () => (
    
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path><path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
</svg>
  ),
  notion: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  vercel: () => (
    <svg width="100" height="100" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2L22 20H2L12 2Z" />
    </svg>
  ),
  figma: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <path
        fill="#e64a19"
        d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
      ></path>
      <path
        fill="#7c4dff"
        d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
      ></path>
      <path
        fill="#66bb6a"
        d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
      ></path>
      <path
        fill="#ff7043"
        d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
      ></path>
      <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        fill="#b3b3b3"
        filter="url(#a)"
      />
      <path
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
        fill="#ffffff"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
        fill="url(#linearGradient1780)"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        fill="url(#b)"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  ),
};
export default OrbitingCirclesDemo;
