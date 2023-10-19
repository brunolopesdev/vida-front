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
      await axios.post("http://localhost:4000/patients", {
        resourceType: "Patient",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><p style="border: 1px #661aff solid; background-color: #e6e6ff; padding: 10px;"><b>Jim </b> male, DoB: 1974-12-25 ( Medical record number: 12345\u00a0(use:\u00a0USUAL,\u00a0period:\u00a02001-05-06 --&gt; (ongoing)))</p><hr/><table class="grid"><tr><td style="background-color: #f3f5da" title="Record is active">Active:</td><td>true</td><td style="background-color: #f3f5da" title="Known status of Patient">Deceased:</td><td colspan="3">false</td></tr><tr><td style="background-color: #f3f5da" title="Alternate names (see the one above)">Alt Names:</td><td colspan="3"><ul><li>Peter James Chalmers (OFFICIAL)</li><li>Peter James Windsor (MAIDEN)</li></ul></td></tr><tr><td style="background-color: #f3f5da" title="Ways to contact the Patient">Contact Details:</td><td colspan="3"><ul><li>-unknown-(HOME)</li><li>ph: (03) 5555 6473(WORK)</li><li>ph: (03) 3410 5613(MOBILE)</li><li>ph: (03) 5555 8834(OLD)</li><li>534 Erewhon St PeasantVille, Rainbow, Vic  3999(HOME)</li></ul></td></tr><tr><td style="background-color: #f3f5da" title="Nominated Contact: Next-of-Kin">Next-of-Kin:</td><td colspan="3"><ul><li>Bénédicte du Marché  (female)</li><li>534 Erewhon St PleasantVille Vic 3999 (HOME)</li><li><a href="tel:+33(237)998327">+33 (237) 998327</a></li><li>Valid Period: 2012 --&gt; (ongoing)</li></ul></td></tr><tr><td style="background-color: #f3f5da" title="Patient Links">Links:</td><td colspan="3"><ul><li>Managing Organization: <a href="organization-example-gastro.html">Organization/1</a> &quot;Gastroenterology&quot;</li></ul></td></tr></table></div>',
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
            given: ["Jim"],
          },
          {
            use: "maiden",
            family: "Windsor",
            given: ["Peter", "James"],
            period: {
              end: "2002",
            },
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
            rank: 1,
          },
          {
            system: "phone",
            value: data.telecom[1].value,
            use: "mobile",
            rank: 2,
          },
          {
            system: "phone",
            value: "(03) 5555 8834",
            use: "old",
            period: {
              end: "2014",
            },
          },
        ],
        gender: "male",
        birthDate: "1974-12-25",
        _birthDate: {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
              valueDateTime: "1974-12-25T14:35:45-05:00",
            },
          ],
        },
        deceasedBoolean: false,
        address: [
          {
            use: "home",
            type: "both",
            text: "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
            line: ["534 Erewhon St"],
            city: "PleasantVille",
            district: "Rainbow",
            state: "Vic",
            postalCode: "3999",
            period: {
              start: "1974-12-25",
            },
          },
        ],
        contact: [
          {
            relationship: [
              {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v2-0131",
                    code: "N",
                  },
                ],
              },
            ],
            name: {
              family: "du Marché",
              _family: {
                extension: [
                  {
                    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
                    valueString: "VV",
                  },
                ],
              },
              given: ["Bénédicte"],
            },
            telecom: [
              {
                system: "phone",
                value: "+33 (237) 998327",
              },
            ],
            address: {
              use: "home",
              type: "both",
              line: ["534 Erewhon St"],
              city: "PleasantVille",
              district: "Rainbow",
              state: "Vic",
              postalCode: "3999",
              period: {
                start: "1974-12-25",
              },
            },
            gender: "female",
            period: {
              start: "2012",
            },
          },
        ],
        managingOrganization: {
          reference: "Organization/1",
        },
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
