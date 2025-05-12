import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { data as cours } from '@/app/data/coursData';
import { NavLink } from '../components/navigation/NavLink';
import { data } from '../interface/data';
type badgeColorObject = {
  [level: string]: string;
};

const badgeColorByLevel: badgeColorObject = {
  sixieme: 'bg-amber',
  cinquieme: 'bg-orange-pantone',
  quatrieme: 'bg-primary',
  troisieme: 'bg-neon-light-green',
  seconde: 'bg-secondary',
  premiere: 'bg-neon-green',
  terminal: 'bg-blue-violet',
  'BTS SIO': 'bg-accent',
};
const compare = (a: data, b: data) => {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
};
const Exercices = () => {
  return (
    <div>
      <div className="container mx-auto py-20 px-5">
        {/* Début Navigation/ Routing */}
        <div className="flex flex-wrap items-center gap-2 capitalize text-zinc-500 mb-10">
          <Link href="/">Accueil</Link>
          <ChevronRightIcon className="size-4" />
          <Link href="/tous-les-exercices">exercices</Link>
          <ChevronRightIcon className="size-4" />
        </div>
        {/* Fin Navigation/ Routing */}

        {/*Début Titre */}
        <div className="text-5xl font-bold capitalize mb-10">
          <h1>Tous les exercices</h1>
        </div>
        {/*Fin Titre */}

        <section>
          <ul className="grid gap-3">
            {Object.entries(cours).map((lecon) =>
              lecon[1].sort(compare).map((el, i) => (
                <li key={i} className="flex gap-1 items-center">
                  <NavLink
                    link={`/classe/${el.level}/cours/${el.id}`}
                    name={el.title}
                    classname={'hover:underline '}
                  />
                  <span
                    className={`font-bold text-[.7em] badge ${badgeColorByLevel[el.level]} text-neutral-900`}
                  >
                    {el.level}
                  </span>
                </li>
              )),
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Exercices;
