"use client";

import styles from "./styles.module.scss";
import logo from "../../public/logo.png";
import Image from "next/image";
import { useGlobalContext } from "../../helpers/context";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Avatar, User } from "@nextui-org/react";

export const Header = () => {
  const { loggedUser } = useGlobalContext();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  const deskMenu = (
    <>
      <nav>
        <ul className={styles.menuItems}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/forum">Blog</a>
          </li>
          <li>
            <a href="/cadastro">Cadastro</a>
          </li>
        </ul>
      </nav>
    </>
  );

  const mobileMenu = (
    <>
      <Icon
        icon="ci:hamburger-lg"
        color="#015249"
        width="30"
        height="30"
        onClick={handleMenu}
      />
      {menuOpen && (
        <div className={`${styles.mobileMenu}`}>
          <i>
            <Icon
              icon="ant-design:close-outlined"
              color="#015249"
              width="30"
              height="30"
              onClick={handleMenu}
            />
          </i>
          <ul className={styles.menuItems}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/forum">Blog</a>
            </li>
            <li>
              <a href="/cadastro">Cadastro</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );

  if (!loggedUser) {
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
          <p>
            <a href="/login">Entrar</a>
          </p>
        </div>

        {isMobile ? mobileMenu : deskMenu}
      </header>
    );
  }

  if (loggedUser) {
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
          <p>
            <a href="/paciente">
              <User
                name={loggedUser?.resource?.name[0]?.given[0]}
                description="Paciente"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </a>
          </p>
        </div>

        {isMobile ? mobileMenu : deskMenu}
      </header>
    );
  }
};
