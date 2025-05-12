'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './css/NavLink.module.css';
type link = {
  link: string;
  name: string;
  classname?: string;
};

export const NavLink = ({ link, name, classname }: link) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={link}
        className={`${pathname === link ? styles.linkActive : styles.linkDefault} ${classname} transition-all`}
      >
        {name}
      </Link>
    </div>
  );
};
