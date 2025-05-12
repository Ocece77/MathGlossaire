import logo from '@/public/icon/squareroot.svg';
import Image from 'next/image';
import Link from 'next/link';
import FallingItem from './components/matter-animation/FallingItem';

export default function Home() {
  return (
    <section className="relative container mx-auto">
      <FallingItem />
      <div className="relative z-10 flex h-screen items-center justify-center gap-4">
        <div>
          {/*Début Intro  */}
          <div className="mb-3">
            <div>
              <span className="sr-only">logo de mxth Formula</span>
              <Image src={logo} alt="logo" height={35} width={35} />
            </div>

            <div>
              <h2 className=" font-mono text-[.8rem]">[The]</h2>
              <h1 className="uppercase font-bold text-5xl">
                m<span className="text-rose">x</span>th formula
              </h1>
              <h2 className=" font-mono text-[.8rem]">
                Ton [Bestie] pour les maths
              </h2>
            </div>
          </div>
          {/*Fin Intro */}

          {/*Début buttons cta */}
          <div className="flex gap-2 flex-wrap">
            <a className="btn text-black hover:bg-lime-400 bg-neon-green">
              Contribuez
            </a>
            <Link href="/" className="btn btn-secondary">
              Mini jeux
            </Link>
          </div>
          {/*Fin buttons cta */}
        </div>
      </div>
    </section>
  );
}
