'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './nav.module.css';

export const Nav = () => {
  // スクロール量に応じてヘッダーの色を変更する useStateを使わずに
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // 100pxスクロールしたらヘッダーの色を変更する
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    // イベントリスナーを削除する
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <div className={`${show ? styles['nav-black'] : styles.nav}`}>
      <Image
        className={styles['nav-logo']}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        width="80"
        height="30"
      />
      <Image
        className={styles['nav-avater']}
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
        width="30"
        height="30"
      />
    </div>
  );
};
