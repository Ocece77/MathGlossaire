'use client';
import React, { useEffect, useState } from 'react';
import { NavLink } from './NavLink';
import Image from 'next/image';
import logo from '../../../public/icon/squareroot.svg';
import githubLogo from '../../../public/icon/github.svg';
import bars from '../../../public/icon/bars.svg';
import xcircle from '../../../public/icon/xcircle.svg';

const menuSixieme = [
  {
    name: 'En cours',
    link: '/',
  },
];

const menuCinquieme = [
  {
    name: 'En cours',
    link: '/',
  },
];

const menuQuatrieme = [
  {
    name: 'En cours',
    link: '/',
  },
];
const menuTroisieme = [
  {
    name: 'En cours',
    link: '/',
  },
];

const menuSeconde = [
  {
    name: 'Règle des parenthèses',
    link: 'seconde/formule/regle-des-parentheses',
  },
  {
    name: 'Développement',
    link: 'seconde/formule/developpement',
  },
  {
    name: 'Factorisation',
    link: 'seconde/formule/factorisation',
  },
];

const menuPremiere = [
  {
    name: 'En cours',
    link: '/',
  },
];

const menuTerminale = [
  {
    name: 'En cours',
    link: '/',
  },
];

const menuSIO = [
  {
    name: 'En cours',
    link: '/',
  },
];

const menus = [
  { name: 'sixième', content: menuSixieme },
  { name: 'cinquième', content: menuCinquieme },
  { name: 'quatrième', content: menuQuatrieme },
  { name: 'troisième', content: menuTroisieme },
  { name: 'seconde', content: menuSeconde },
  { name: 'première', content: menuPremiere },
  { name: 'terminal', content: menuTerminale },
  { name: 'BTS SIO', content: menuSIO },
];

export const SideBar = () => {
  const [style, setStyle] = useState(false);
  const handleClick = () => {
    setStyle(!style);
  };
  useEffect(() => {
    const width = window.innerWidth;
    window.addEventListener('resize', () => {
      if (width > 768) setStyle(true);
    });
  }, []);

  return (
    <>
      {/* >768px seulement */}
      <button
        className="fixed right-5 top-7 z-1 md:hidden"
        onClick={() => handleClick()}
      >
        <span className="sr-only">ouvrir le menu</span>
        {!style && <Image src={bars} alt="menu icon" height={30} width={30} />}
        {style && (
          <Image src={xcircle} alt="menu icon" height={30} width={30} />
        )}
      </button>

      <nav
        className={`fixed insex-y-0 left-0 md:w-1/4 w-full h-full border-r-1 border-zinc-500 bg-zinc-900 p-5
    ${style ? 'fixed' : 'hidden'}`}
      >
        {/*Début du Header */}
        <div className="flex items-center justify-between border-b-1 border-zinc-500 pb-5">
          <div className="flex items-center gap-4">
            <div>
              <span className="sr-only">logo de mxth Formula</span>
              <Image src={logo} alt="logo" height={35} width={35} />
            </div>

            <div>
              <h2 className=" font-mono text-[.8rem]">[The]</h2>
              <h1 className="uppercase font-bold xl:text-2xl">
                m<span className="text-rose">x</span>th formula
              </h1>
            </div>
          </div>
        </div>

        {/*Fin du Header */}

        {/*Début de la liste par principal */}
        <div className="flex flex-col justify-center gap-4 border-b-1 border-zinc-500 py-5">
          <NavLink link="/" name="Accueil" colorHover={'text-rose'} />
          <NavLink
            link="/mini-jeux"
            name="Mini jeux"
            colorHover={'text-rose'}
          />
        </div>
        {/*Fin de la liste par principal */}

        {/*Début de la liste par niveau */}
        <div className="flex flex-col items-center gap-2 border-b-1 border-zinc-500 py-5">
          {menus.map((menu, i) => (
            <ul key={i} className="menu w-full p-0">
              <li>
                <details>
                  {/*Nom de la classe/niveau */}
                  <summary className="p-0 py-3 hover:bg-transparent capitalize">
                    {menu.name}
                  </summary>

                  {/*Contenu du niveau / formule associées au niveau */}
                  {menu.content.map((item, i) => (
                    <ul key={i}>
                      <li>
                        <NavLink link={item.link} name={item.name} />
                      </li>
                    </ul>
                  ))}
                </details>
              </li>
            </ul>
          ))}
        </div>
        {/*Fin de la liste par niveau */}

        {/*Début du footer*/}
        <div className="absolute bottom-0">
          <a
            href="https://github.com/Ocece77"
            className="flex items-center gap-2 py-5 text-[.8rem] hover:text-rose transition-all"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <Image src={githubLogo} alt="Github Logo" height={15} width={15} />
            Contribuer au projet
          </a>
        </div>

        {/*Fin du footer */}
      </nav>
    </>
  );
};
