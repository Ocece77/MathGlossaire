'use client';
import { data } from '@/app/interface/data';
import React, { useState } from 'react';
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type Props = {
  data: data;
};

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

const FormuleLayout = ({ data }: Props) => {
  return (
    <div className="container mx-auto py-20 px-5">
      {/* Début Navigation/ Routing */}
      <div className="flex flex-wrap items-center gap-2 capitalize text-zinc-500 mb-10">
        <Link href={`/lecon/${data.level}`}>{data.level}</Link>
        <ChevronRightIcon className="size-4" />
        <h1 className="text-zinc-100">{data.title}</h1>
      </div>
      {/* Fin Navigation/ Routing */}

      {/* Début du contenu */}
      <article className="grid gap-5">
        <header className=" text-5xl font-bold ">
          <h1 className="relative w-fit">
            {data.title}
            <span
              className={`md:ml-0 ml-4 md:absolute md:-rotate-12 -right-12 -bottom-3 badge ${badgeColorByLevel[data.level]} text-neutral-900`}
            >
              {data.level}
            </span>
          </h1>
          <div></div>
        </header>

        <section className="font-mono">
          <h1>{data.explanation}</h1>
        </section>

        <hr />

        <section>
          <h2 className="text-3xl font-bold">Exemples</h2>
          <div className="flex gap-4 items-center">
            <ArrowRightIcon className="size-4" />
            <p className="font-mono">Pour comprendre le concept !</p>
          </div>
          {data.exercices}
        </section>

        <hr />

        <section>
          <h2 className="text-3xl font-bold">Exercices</h2>
          <div className="flex gap-4 items-center">
            <ArrowRightIcon className="size-4" />
            <p className="font-mono">Pour assimiler le concept !</p>
          </div>

          {data.exercices}
        </section>
      </article>
      {/* Fin du contenu */}
    </div>
  );
};

export default FormuleLayout;
