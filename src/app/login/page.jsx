"use client";

import { useState } from "react";
import { redirect } from 'next/navigation'
import { useGlobalContext } from "../../../helpers/context";
import styles from "./styles.module.scss";

export default function () {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const { onSubmit } = useGlobalContext();

  return (
    <section className={styles.loginContainer}>
      <h1>FAÇA SEU LOGIN</h1>
      <article className={styles.loginWrapper}>
        <form onSubmit={(e) => {e.preventDefault(), onSubmit(name), redirect('/')}}>
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Digite seu email"
          />
          <button className={styles.loginBtn}>Entrar</button>
        </form>
      </article>
    </section>
  );
}
