import Image from "next/image";
import styles from "./styles.module.scss";
import { AppointmentsModal } from "../AppointmentsModal";
import { useGlobalContext } from "../../helpers/context";
import { Icon } from "@iconify/react";

export const FloatMenu = () => {
  const { handleModal,getPatientAppointments, loggedUser } = useGlobalContext();

  return (
    <>
      <nav className={styles.floatMenuContainer}>
        <ul>
            <li>
            <Icon icon="octicon:history-16" color="white" width="30" height="30" />
              <a href="/historico">histórico</a>
            </li>
            <li>
            <Icon icon="ic:outline-content-paste" color="white" width="30" height="30" />
              <a href="/paciente">ficha</a>
            </li>
            <li onClick={() => [getPatientAppointments(loggedUser.resource.id), handleModal()]}>
            <Icon icon="teenyicons:appointments-outline" width="30" height="30" color="#fff"/>
              <a href="#">agenda</a>
            </li>
        </ul>
      </nav>

      <AppointmentsModal />
    </>
  );
};
