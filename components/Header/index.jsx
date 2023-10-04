"use client";

import styles from "./styles.module.scss";
import logo from "../../public/logo.png";
import Image from "next/image";
import { useGlobalContext } from "../../helpers/context";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export const Header = () => {
  const { loggedUser } = useGlobalContext();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  if(!loggedUser) return
  
  const deskMenu = (
    <>
      <nav>
        <ul className={styles.menuItems}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/paciente">Minha área</a>
          </li>
          <li>
            <a href="/forum">Fórum</a>
          </li>
          {loggedUser.length === 0 && (
            <li>
              <a href="/forum">Cadastro</a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );

  const mobileMenu = (
    <>
      <Icon icon="ci:hamburger-lg" color="#015249" width="30" height="30" onClick={handleMenu}/>
      {menuOpen && (
        <div className={`${styles.mobileMenu}`}>
          <i><Icon icon="ant-design:close-outlined" color="#015249" width="30" height="30" onClick={handleMenu}/></i>
          <ul className={styles.menuItems}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/paciente">Minha área</a>
            </li>
            <li>
              <a href="/forum">Blog</a>
            </li>
            {loggedUser.length === 0 && (
              <li>
                <a href="/forum">Cadastro</a>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );  

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <Image
          src={logo}
          width="100%"
          height="100%"
          alt="Vida Mais Logo"
          className={styles.imgLogo}
        />
      </div>

      <div className={styles.userInfo}>
        <a href="/paciente">
          <Icon
            icon="ant-design:user-outlined"
            width="30"
            height="30"
            color="#015249"
          />
        </a>
        <p>
          {loggedUser.length === 0 ? (
            <a href="/login">Entrar</a>
            ) : (
            loggedUser?.resource?.name[0]?.given[0]
          )}
        </p>
      </div>

      {isMobile ? mobileMenu : deskMenu}
    </header>
  );
};
