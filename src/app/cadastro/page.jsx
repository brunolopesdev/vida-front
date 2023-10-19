"use client";

import { set, useForm } from "react-hook-form";
import Link from "next/link";

import styles from "./styles.module.scss";
import { useState } from "react";
import axios from "axios";

export default function PacienteNovo() {
  const form = useForm();

  const [isSaving, setIsSaving] = useState(false);

  async function onSubmit(data) {
    setIsSaving(true);
    try {
      await axios.post("https://vida-api.vercel.app/patients", {
        ...data,
        resourceType: "Patient",
        identifier: data.identifier.map((identifier) => ({
          ...identifier,
          use: "official",
        })),
        name: data.name.map((name) => ({
          ...name,
          use: "official",
        })),
        telecom: data.telecom.map((telecom) => ({
          ...telecom, 
          system: "phone",
          use: "mobile",
          rank: 1,
        })),
        address: data.address.map((address) => ({
          ...address,
          use: "home",
          type: "both",
          period: {
            start: data.birthDate,
          },
        })),
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className={styles.registerContainer}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-4 space-y-4 flex flex-col"
      >
        <label htmlFor="active" className="block">
          Ativo:
        </label>
        <input
          type="checkbox"
          checked={true}
          {...form.register("active")}
          className="form-checkbox"
        />

        <label htmlFor="officialName" className="block mt-4">
          Nomes:
        </label>

        <label htmlFor="family" className="block">
          Sobrenome:
        </label>
        <input
          type="text"
          {...form.register("name[0].family", {
            required: {
              value: true,
              message: "Sobrenome é um campo obrigatório",
            },
          })}
          className="form-input"
        />

        <div className="mt-4">
          <label htmlFor="given" className="block">
            Nomes Próprios:
          </label>
          <input
            type="text"
            placeholder="Primeiro nome"
            {...form.register("name[0].given[0]", {
              required: {
                value: true,
                message: "Primeiro nome é um campo obrigatório",
              },
            })}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Nome do meio"
            {...form.register("name[0].given[1]")}
            className="form-input mt-2"
          />
          <input
            type="text"
            placeholder="Sobrenome"
            {...form.register("name[0].given[2]")}
            className="form-input mt-2"
          />
          {form.formState.errors.name?.[0].given?.[0].message && (
            <p className="text-red-500">
              {form.formState.errors.name[0].given[0].message}
            </p>
          )}
        </div>

        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          {...form.register("identifier[0].value", {
            required: {
              value: true,
              message: "Email é um campo obrigatório",
            },
          })}
          className="form-input"
        />

        <label htmlFor="phone" className="block mt-4">
          Telefone:
        </label>
        <input
          type="text"
          {...form.register("telecom[0].value")}
          className="form-input"
        />

        <label htmlFor="gender" className="block mt-4">
          Gênero:
        </label>
        <input
          type="text"
          {...form.register("gender")}
          className="form-input"
        />

        <label htmlFor="birthDate" className="block mt-4">
          Data de Nascimento:
        </label>
        <input
          type="text"
          {...form.register("birthDate")}
          className="form-input"
        />

        <label htmlFor="address" className="block mt-4">
          Endereço:
        </label>

        <label htmlFor="addressText" className="block">
          Endereço completo:
        </label>
        <input
          type="text"
          {...form.register("address[0].text")}
          className="form-input"
        />

        <label htmlFor="line1" className="block">
          Linha 1:
        </label>
        <input
          type="text"
          {...form.register("address[0].line[0]")}
          className="form-input"
        />

        <label htmlFor="line2" className="block">
          Linha 2:
        </label>
        <input
          type="text"
          {...form.register("address[0].line[1]")}
          className="form-input"
        />

        <label htmlFor="city" className="block">
          Cidade:
        </label>
        <input
          type="text"
          {...form.register("address[0].city")}
          className="form-input"
        />

        <label htmlFor="district" className="block">
          Bairro:
        </label>
        <input
          type="text"
          {...form.register("address[0].district")}
          className="form-input"
        />

        <label htmlFor="state" className="block">
          Estado:
        </label>
        <input
          type="text"
          {...form.register("address[0].state")}
          className="form-input"
        />

        <label htmlFor="postalCode" className="block">
          CEP:
        </label>
        <input
          type="text"
          {...form.register("address[0].postalCode")}
          className="form-input"
        />

        <div className="flex gap-5 align-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            {isSaving ? "Salvando..." : "Salvar"}
          </button>

          <hr className="my-4" />

          <Link
            href="/pacientes"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Voltar
          </Link>
        </div>
      </form>
    </section>
  );
}
