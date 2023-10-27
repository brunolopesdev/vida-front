import Image from "next/image";
import styles from "./styles.module.scss";
import { useGlobalContext } from "../../helpers/context";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const UtilButtons = () => {
  const { getPatientAppointments, loggedUser, handleModal, handleModalPract, getPractitioners } =
    useGlobalContext();

  return (
    <section className={styles.utilsContainer}>
      <article className={styles.utilsWrapper}>
        <ul>
          <li
            className={styles.utilsBtn}
            onClick={() => [
              getPatientAppointments(loggedUser.resource.id),
              handleModal(),
            ]}
          >
            <Icon
              icon="teenyicons:appointments-outline"
              width="50"
              height="50"
              color="#015249"
            />
            Minha agenda
          </li>
          <li
            className={styles.utilsBtn}
            onClick={() => [getPractitioners(), handleModalPract()]}
          >
            <Icon
              icon="fontisto:doctor"
              width="50"
              height="50"
              color="#015249"
            />
            Fale com seu médico
          </li>
          <li className={styles.utilsBtn}>
            <Icon
              icon="bi:building-fill"
              width="50"
              height="50"
              color="#015249"
            />
            Hospitais mais próximos
          </li>
          <li className={styles.utilsBtn}>
            <Icon
              icon="octicon:discussion-closed-16"
              width="50"
              height="50"
              color="#015249"
            />
            <Link href="/blog" alt="Link para o blog">Blog</Link>
          </li>
        </ul>
      </article>
    </section>
  );
};
