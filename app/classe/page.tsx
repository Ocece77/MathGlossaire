import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { data as cours } from '@/app/data/coursData';
import { NavLink } from '../components/navigation/NavLink';

const Classe = () => {
  return (
    <div>
      <div>
        <div className="container mx-auto py-20 px-5">
          {/* Début Navigation/ Routing */}
          <div className="flex flex-wrap items-center gap-2 capitalize text-zinc-500 mb-10">
            <Link href="/">Accueil</Link>
            <ChevronRightIcon className="size-4" />
            <Link href="/tous-les-cours">cours</Link>
            <ChevronRightIcon className="size-4" />
          </div>
          {/* Fin Navigation/ Routing */}

          {/*Début Titre */}
          <div className="text-5xl font-bold capitalize mb-10">
            <h1>Tous les cours</h1>
          </div>
          {/*Fin Titre */}

          <section>
            <ul className="grid gap-3">
              {Object.entries(cours).map((cour) =>
                cour[1].map((el, i) => (
                  <li key={i}>
                    <NavLink
                      link={`/classe/${el.level}/cours/${el.id}`}
                      name={el.title}
                      classname={'hover:underline '}
                    />
                  </li>
                )),
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Classe;
