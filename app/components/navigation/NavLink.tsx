'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './css/NavLink.module.css';
type link = {
  link: string;
  name: string;
  colorHover?: string;
};

export const NavLink = ({ link, name, colorHover }: link) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={link}
        className={`${pathname === link ? styles.linkActive : styles.linkDefault} hover:${colorHover} transition-all`}
      >
        {name}
      </Link>
    </div>
  );
};
