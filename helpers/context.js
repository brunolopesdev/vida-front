"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { redirect } from "next/navigation";

// Criando o contexto
export const GlobalContext = createContext(undefined);

// Provedor do contexto
export const GlobalContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [practitioners, setPractitioners] = useState([]);
  const [open, setOpen] = useState(false);
  const [openPract, setOpenPract] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const handleModalPract = () => {
    setOpenPract(!openPract);
  };

  const onSubmit = async (name) => {
    localStorage.clear();
    if (name) {
      const { data } = await axios.get("https://vida-api.vercel.app/patients");

      const findUser = data.find(
        (patient) =>
          patient.resource.name[0].given[0].toLowerCase() === name.toLowerCase()
      );

      localStorage.setItem("loggedUser", JSON.stringify(findUser));

      setLoggedUser(findUser);

      window.location.href = "/paciente";
    }
  };

  const getPatientAppointments = async (id) => {
    const { data } = await axios.get(
      `https://vida-api.vercel.app/patient-appointments/${id}`
    );

    setAppointments(data?.entry || []);
  };

  const getPractitioners = async () => {
    const { data } = await axios.get(
      "https://vida-api.vercel.app/practitioners"
    );

    setPractitioners(data);
  };

  useEffect(() => {
    if (!loggedUser) {
      const userStored = JSON.parse(localStorage.getItem("loggedUser")) || [];
      setLoggedUser(userStored);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        onSubmit,
        loggedUser,
        getPatientAppointments,
        appointments,
        open,
        handleModal,
        getPractitioners,
        practitioners,
        handleModalPract,
        openPract,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext must be used within a ContextProvider");
  }
  return context;
};
