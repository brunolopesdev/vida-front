"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { redirect } from 'next/navigation'
import axios from "axios";

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

  const handleLogout = () => {
    setLoggedUser(null);
    localStorage.clear();

    window.location.href = "/";
  }

  const onSubmit = async (email) => {
    console.log("email", email)
    localStorage.clear();
    if (email) {
      const { data } = await axios.get("https://vida-api.vercel.app/patients");

      const findUser = data.find(
        (patient) =>
          patient?.resource?.telecom[2]?.value.toLowerCase() === email.toLowerCase()
      );

      localStorage.setItem("loggedUser", JSON.stringify(findUser));

      // setLoggedUser(findUser);

      const userStored = JSON.parse(localStorage.getItem("loggedUser")) || [];
      setLoggedUser(userStored);

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
    // if (!loggedUser) {
    //   const userStored = JSON.parse(localStorage.getItem("loggedUser")) || [];
    //   setLoggedUser(userStored);
    // }
    if (!loggedUser && localStorage.getItem("loggedUser") !== null) {
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
        handleLogout
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
