"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { UtilButtons } from "../../../components/UtilButtons";
import { Icon } from "@iconify/react";
import { useGlobalContext } from "../../../helpers/context";
import axios from "axios";
import { Progress } from "@nextui-org/react";
import { PractitionersModal } from "../../../components/PractModal";
import Link from "next/link";
import { AiTwotoneAlert } from "react-icons/ai";

export default function DonorPage() {
  const form = useForm();
  const MySwal = withReactContent(Swal)

  const { loggedUser, handleLogout } = useGlobalContext();
  const [possibleDonors, setPossibleDonors] = useState();

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

  const fetchPossibleDonors = async () => {
    try {
      const { data } = await axios.get("https://vida-api.vercel.app/person");

      setPossibleDonors(data);
      console.log("data222", data);
      console.log();
    } catch (err) {
      console.log(err);
    }
  };


  console.log('form', form.getValues())
  async function onSubmit(data) {
    try {
      await axios.post("https://vida-api.vercel.app/appointment", {
        resourceType: "Appointment",
        status: "booked",
        specialty: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "394814009",
                display: data.specialty[0].coding.display,
              },
            ],
          },
        ],
        description: data.description,
        start: data.start,
        end: data.start,
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
              reference:
                "Patient/" + loggedUser
                  ? loggedUser?.resource?.id
                  : "895d44d7-3337-4fbf-9b4a-21856238b230",
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
    } catch (err) {
      console.log(err);
    } finally {

      MySwal.fire({
        title: <strong>Consulta agendada!</strong>,
        icon: 'success'
      })
    }
  }

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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Descrição"
            name="description"
            {...form.register("description", {
                required: {
                  value: true,
                  message: "Esse campo é obrigatório",
                },
            })}
          />
          <input
            type="date"
            placeholder="Data"
            name="start"
            {...form.register("start", {
                required: {
                  value: true,
                  message: "Esse campo é obrigatório",
                },
            })}
          />
          <input
            type="text"
            placeholder="Motivo da consulta"
            name="reason"
            {...form.register("reason", {
                required: {
                  value: true,
                  message: "Esse campo é obrigatório",
                },
            })}
          />
          <input type="text" name="specialty" {...form.register("specialty[0].coding.display", {
                required: {
                  value: true,
                  message: "Esse campo é obrigatório",
                },
            })} />
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
    fetchPossibleDonors();
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
        className="flex-col"
      >
        <h1>Carregando...</h1>
        <Link href="/">Voltar para home</Link>
      </div>
    );
  }

  return (
    <>
      <section className={styles.donorContainer}>
        <p>Dados Pessoais</p>
        <article className={styles.donorWrapper}>
          <div className={styles.donorData}>
            <p>Nome: {loggedUser?.resource?.name[0]?.given?.join(" ")}</p>
            <p>Celular: {loggedUser?.resource?.telecom[1]?.value}</p>
            <p>Endereço: {loggedUser?.resource?.address[0]?.line[0]}</p>
            <p>Bairro: {loggedUser?.resource?.address[0]?.district}</p>
            <p>Cidade: {loggedUser?.resource?.address[0]?.city}</p>
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
        <PractitionersModal />

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
            <button className={styles.btn} onClick={() => handleLogout()}>
              <Icon icon="material-symbols:logout" width="20" height="20" />
              logout
            </button>
          </div>
        </div>
      </section>

      <section className="flex align-center justify-center">
        {possibleDonors && (
          <p className="flex items-center justify-center p-4 gap-4">
            <AiTwotoneAlert color="red" size={30} /> {possibleDonors.length}{" "}
            possíveis doadores, aguarde os próximos passos!
          </p>
        )}
      </section>

      <section className={`${styles.doadorSteps} p-4`}>
        <Progress
          aria-label="Loading..."
          value={10}
          className="w-full"
          color="success"
        />
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
        {/* <hr /> */}
      </section>

      <section className={styles.btnContainer}>
        <UtilButtons />
      </section>
    </>
  );
}
