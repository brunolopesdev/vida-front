"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import { UtilButtons } from "../../../components/UtilButtons";
import { Icon } from "@iconify/react";
import { useGlobalContext } from "../../../helpers/context";
import { AppointmentsModal } from "../../../components/AppointmentsModal";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function DonorPage() {
  const { loggedUser } = useGlobalContext();
  const [modalIsOpen, setIsOpen] = useState({
    dataModal: false,
    newAppointmentModal: false,
  });
  const [formData, setFormData] = useState({
    bloodType: "",
    weight: "",
    height: "",
    diseaseType: "",
  });
  const [appointmentData, setAppointmentData] = useState({
    resourceType: "Appointment",
    status: "booked",
    specialty: [
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "394814009",
            display: "",
          },
        ],
      },
    ],
    description: "",
    start: "",
    end: "",
    participant: [
      {
        actor: {
          reference: "Practitioner/" + "d0331a52-9150-4ab8-89a4-f3553a84b27d",
        },
        status: "accepted",
        type: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                code: "ATND",
              },
            ],
            text: "Attendee",
          },
        ],
      },
      {
        actor: {
          reference: "Patient/" + loggedUser?.resource.id,
        },
        status: "accepted",
        type: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                code: "PAT",
              },
            ],
            text: "Patient",
          },
        ],
      },
    ],
  });

  const createNewAppointment = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://vida-api.vercel.app/appointment",
      appointmentData
    );
  };

  function openModal() {
    setIsOpen({ dataModal: true, newAppointmentModal: false });
  }

  function openAppointmentModal() {
    setIsOpen({ dataModal: false, newAppointmentModal: true });
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitAdditionalData = (e) => {
    e.preventDefault();
    localStorage.setItem("additionalData", JSON.stringify(formData));
    setIsOpen(false);
  };

  const deleteData = () => {
    localStorage.removeItem("additionalData");
    setFormData({
      bloodType: "",
      weight: "",
      height: "",
      diseaseType: "",
    });
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChangeAppointment = (e) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });

    console.log("appointmentData", appointmentData);
  };

  const dataModal = (
    <div className={styles.modalContainer}>
      <i>
        <Icon icon="icomoon-free:cross" onClick={closeModal} />
      </i>
      <div className={styles.modalWrapper}>
        <p>Preencha seus dados</p>
        <form onSubmit={submitAdditionalData}>
          <input
            type="text"
            placeholder="Tipo sanguíneo"
            name="bloodType"
            value={formData.bloodType}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Peso"
            name="weight"
            value={formData.weight}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Altura"
            name="height"
            value={formData.height}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Condições de saúde"
            name="diseaseType"
            value={formData.diseaseType}
            onChange={onChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );

  const newAppointmentModal = (
    <div className={styles.modalContainer}>
      <i>
        <Icon icon="icomoon-free:cross" onClick={closeModal} />
      </i>
      <div className={styles.modalWrapper}>
        <p>Preencha seus dados</p>
        <form onSubmit={createNewAppointment}>
          <input
            type="text"
            placeholder="Descrição"
            name="description"
            value={appointmentData.description}
            onChange={onChangeAppointment}
          />
          <input
            type="date"
            placeholder="Data"
            name="start"
            value={appointmentData.start}
            onChange={onChangeAppointment}
          />
          <input
            type="text"
            placeholder="Motivo da consulta"
            name="reason"
            value={appointmentData.start}
            onChange={onChangeAppointment}
          />
          <select name="" id="">
            <option value="">Selecione a especialidade</option>
            <option value="">Cardiologia</option>
            <option value="">Dermatologia</option>
            <option value="">Endocrinologia</option>
            <option value="">Gastroenterologia</option>
            <option value="">Geriatria</option>
            <option value="">Ginecologia</option>
            <option value="">Hematologia</option>            
          </select>
          <select name="" id="">
            <option value="">Selecione o médico</option>
            <option value="">Dr. Fulano</option>
            <option value="">Dr. Fulano</option>
            <option value="">Dr. Fulano</option>
          </select>
          <select name="" id="">
            <option value="">Selecione o horário</option>
            <option value="">08:00</option>
            <option value="">09:00</option>
            <option value="">10:00</option>
          </select>
          <select name="" id="">
            <option value="">Selecione o local</option>
            <option value="">Hospital São Paulo</option>
            <option value="">Hospital São Paulo</option>
            <option value="">Hospital São Paulo</option>
          </select>    
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );

  useEffect(() => {
    if (localStorage.getItem("additionalData")) {
      setFormData(JSON.parse(localStorage.getItem("additionalData")));
    }
  }, []);

  if (!loggedUser) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5rem",
        }}
      >
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <>
      <section className={styles.donorContainer}>
        <p>Dados Pessoais</p>
        <article className={styles.donorWrapper}>
          <div className={styles.donorData}>
            <p>Nome: {loggedUser.resource.name[0].given.join(" ")}</p>
            <p>Celular: {loggedUser.resource.telecom[0].value}</p>
            <p>Endereço: {loggedUser.resource.address[0].line[0]}</p>
            <p>Bairro: {loggedUser.resource.address[0].district}</p>
            <p>Cidade: {loggedUser.resource.address[0].city}</p>
          </div>
          <div className={styles.donorAditionalData}>
            <p>Tipo sanguíneo: {formData?.bloodType}</p>
            <p>Peso: {formData?.weight}</p>
            <p>Altura: {formData?.height}</p>
            <p>Condições de saúde: {formData?.diseaseType}</p>
          </div>
        </article>

        {modalIsOpen.dataModal && dataModal}
        {modalIsOpen.newAppointmentModal && newAppointmentModal}

        {/* <AppointmentsModal /> */}

        <div className={styles.btnsContainer}>
          <div className={styles.btnsWrapper}>
            <button className={styles.btn} onClick={openModal}>
              <Icon icon="iconamoon:edit" width="20" height="20" />
              inserir dados adicionais
            </button>
            <button className={styles.btn} onClick={deleteData}>
              <Icon icon="iconamoon:trash" width="20" height="20" />
              excluir dados
            </button>
            <button className={styles.btn} onClick={openAppointmentModal}>
              <Icon
                icon="teenyicons:appointments-outline"
                width="20"
                height="20"
              />
              agendar consulta
            </button>
          </div>
        </div>
      </section>

      <section className={styles.doadorSteps}>
        <div className={styles.doadorStepsContainer}>
          <div className={styles.step}>
            <i>
              <Icon icon="iconamoon:check-bold" width="30" height="30" />
            </i>
            <p>exames iniciais</p>
          </div>
          <div className={styles.step}>
            <i>
              <Icon icon="iconamoon:check-bold" width="30" height="30" />
            </i>
            <p>doador identificado</p>
          </div>
          <div className={styles.step}>
            <i>
              <Icon icon="iconamoon:check-bold" width="30" height="30" />
            </i>
            <p>retorno ao médico</p>
          </div>
          <div className={styles.step}>
            <i>
              <Icon icon="iconamoon:check-bold" width="30" height="30" />
            </i>
            <p>doação</p>
          </div>
        </div>
        <hr />
      </section>

      <section className={styles.btnContainer}>
        <UtilButtons />
      </section>
    </>
  );
}
