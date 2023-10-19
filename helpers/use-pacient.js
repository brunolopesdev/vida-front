import axios from "axios";
import React from "react";

export default function usePatient(id) {
  

  return {
    isSavingPatient: isSaving,
    createPatient,
  };
}
