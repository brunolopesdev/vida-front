"use client";

import { set, useForm } from "react-hook-form";
import Link from "next/link";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import styles from "./styles.module.scss";
import { useState } from "react";
import axios from "axios";

export default function PacienteNovo() {
  const form = useForm();
  const MySwal = withReactContent(Swal)

  const [isSaving, setIsSaving] = useState(false);

  async function onSubmit(data) {
    try {
      await axios.post("http://localhost:4000/patients", {
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

  return (
    <section className={styles.registerContainer}>
        <h1>Receptor</h1>
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
          <select name="" id="" {...form.register("specialty[0].coding.display", {
                required: {
                  value: true,
                  message: "Esse campo é obrigatório",
                },
            })}>
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
    </section>
  );
}
