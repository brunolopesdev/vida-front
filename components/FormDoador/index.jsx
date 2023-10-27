"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import styles from "./styles.module.scss";
import { useState } from "react";
import axios from "axios";

export default function DoadorNovo() {
  const form = useForm();
  const MySwal = withReactContent(Swal)

  const [isSaving, setIsSaving] = useState(false);

  async function onSubmit2(data) {
    setIsSaving(true);
    try {
      await axios.post("https://vida-api.vercel.app/person", {
        resourceType: "Person",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <table>\n        <tbody>\n          <tr>\n            <td>Name</td>\n            <td>Peter James <b>Chalmers</b> (&quot;Jim&quot;)</td>\n          </tr>\n          <tr>\n            <td>Address</td>\n            <td>534 Erewhon, Pleasantville, Vic, 3999</td>\n          </tr>\n          <tr>\n            <td>Contacts</td>\n            <td>Home: unknown. Work: (03) 5555 6473</td>\n          </tr>\n          <tr>\n            <td>Id</td>\n            <td>MRN: 12345 (Acme Healthcare)</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>',
        },
        identifier: [
          {
            use: "usual",
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                  code: "MR",
                },
              ],
            },
            system: "urn:oid:1.2.36.146.595.217.0.1",
            value: "12345",
            period: {
              start: "2001-05-06",
            },
            assigner: {
              display: "Acme Healthcare",
            },
          },
        ],
        active: true,
        name: [
          {
            use: "official",
            family: data.name[0].family,
            given: [data.name[0].given[0], data.name[0].given[1], data.name[0].given[2]],
          },
          {
            use: "usual",
            given: [data.name[0].given[0]],
          },
        ],
        telecom: [
          {
            use: "home",
          },
          {
            system: "phone",
            value: data.telecom[0].value,
            use: "work",
          },
          {
            system: "email",
            value: data.telecom[1].value,
            use: "home",
          },
        ],
        gender: data.gender,
        birthDate: data.birthDate,
        address: [
          {
            use: "home",
            line: [data.address[0].line[0]],
            city: data.address[0].city,
            state: data.address.state,
            postalCode: data.address.postalCode,
          },
        ],
        link: [
          {
            target: {
              reference: "RelatedPerson/peter",
              display: "Peter Chalmers",
            },
          },
          {
            target: {
              reference: "Patient/example",
              display: "Peter Chalmers",
            },
          },
        ],
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsSaving(false);

      MySwal.fire({
        title: <strong>Cadastro realizado!</strong>,
        icon: 'success'
      })
    }
  }

  return (
    <section className={styles.registerContainer}>
      <h1>Doador</h1>
      <form
        onSubmit={form.handleSubmit(onSubmit2)}
        className="p-4 space-y-4 flex flex-col"
      >
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
          {...form.register("telecom[1].value", {
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
            href="/"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Voltar
          </Link>
        </div>
      </form>
    </section>
  );
}
