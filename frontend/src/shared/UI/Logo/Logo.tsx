import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { LogoIcon } from '../../../../public/icons/icons';
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href={"/"}>
        <Image
          src="img/website-icon.svg"
          width={61}
          height={64}
          alt="logo"
          priority
        />
      </Link>
      <Link className={styles.logo__title} href={"/"}>
        <LogoIcon />
      </Link>
    </div>
  );
}

export default Logo