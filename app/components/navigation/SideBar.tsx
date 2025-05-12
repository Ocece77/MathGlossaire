'use client';
import React, { useEffect, useState } from 'react';
import { NavLink } from './NavLink';
import Image from 'next/image';
import logo from '../../../public/icon/squareroot.svg';
import githubLogo from '../../../public/icon/github.svg';
import bars from '../../../public/icon/bars.svg';
import xcircle from '../../../public/icon/xcircle.svg';
import { menus } from '@/app/data/menuData';

export const SideBar = () => {
  const [style, setStyle] = useState<boolean>(true);
  const [hasMounted, setHasMounted] = useState(false);

  const handleClick = () => {
    setStyle((prevStyle) => !prevStyle);
  };

  useEffect(() => {
    setHasMounted(true); // Évite les erreurs d’hydratation

    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 768) {
        setStyle(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!hasMounted) return null; // Empêche le rendu avant montage

  return (
    <>
      {/* >768px seulement */}
      <button
        className="fixed right-5 top-7 md:hidden z-99 "
        onClick={() => handleClick()}
      >
        <span className="sr-only">ouvrir le menu</span>
        {!style && <Image src={bars} alt="menu icon" height={30} width={30} />}
        {style && (
          <Image src={xcircle} alt="menu icon" height={30} width={30} />
        )}
      </button>

      <nav
        className={`fixed z-98 insex-y-0 left-0 md:w-1/4 w-full h-full overflow-y-scroll border-r-1 border-zinc-500 bg-zinc-900 p-5 
    ${style ? 'fixed' : 'hidden'}`}
      >
        <div className="overflow-scroll">
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
            <NavLink link="/" name="Accueil" classname="hover:text-rose" />
            <NavLink
              link="/mini-jeux"
              name="Mini jeux"
              classname="hover:text-rose"
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
                        <li
                          onClick={() =>
                            window.innerWidth < 768 && setStyle(false)
                          }
                        >
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
          <div className="">
            <a
              href="https://github.com/Ocece77"
              className="flex items-center gap-2 py-5 text-[.8rem] hover:text-rose transition-all"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Image
                src={githubLogo}
                alt="Github Logo"
                height={15}
                width={15}
              />
              Contribuer au projet
            </a>
          </div>
          {/*Fin du footer */}
        </div>
      </nav>
    </>
  );
};
