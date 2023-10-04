import { Icon } from "@iconify/react";
import { useGlobalContext } from "../../helpers/context";
import styles from "./styles.module.scss";

export const AppointmentsModal = () => {
  const { appointments, handleModal, open } = useGlobalContext();

  function formatBrazilianDate(inputDate) {

    const date = new Date(inputDate);

    date.setHours(date.getHours() + 3);
    
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <section className={styles.appointmentsModal}>
      {open && (
        <div className={styles.modalContainer}>
          <i>
            <Icon icon="icomoon-free:cross" onClick={handleModal} />
          </i>
          <div className={styles.modalWrapper}>
            <p className={styles.modalTitle}>Sua agenda</p>

            {!appointments.length && (
              <p style={{color: '#015249'}}>
                Carregando...
              </p>
            )}

            {appointments.map((appointment, index) => {
              return (
                <div className={styles.appointmentWrapper} key={index}>
                  <p>
                    Status:{" "}
                    {appointment.resource.status === "booked"
                      ? "Confirmado"
                      : "Cancelada"}
                  </p>
                  <p>
                    Data da consulta:{" "}
                    {formatBrazilianDate(appointment.resource.start)}
                  </p>
                  <p>
                    Local da consulta:{" "}
                    {appointment.resource.location
                      ? appointment.resource.location
                      : "A definir"}
                  </p>
                  <p>Descrição: {appointment.resource.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
