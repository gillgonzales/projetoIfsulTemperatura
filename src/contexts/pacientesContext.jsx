import { createContext, useEffect, useState } from "react";

export const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {

  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    console.log('Pacientes:', pacientes);
    pacientes.map(paciente => console.log(paciente));
  }, [pacientes]);

  const getPacientes = async () => {
    try {
      //endpoint do firebase
    } catch (error) {
      console.log(error);
    }
  }

  const createPaciente = async (paciente) => {
    try {
      //endpoint do firebase, por enquanto vamos adicionar o paciente no estado
      setPacientes([...pacientes, paciente]);
      return true
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <PacientesContext.Provider value={{
      pacientes,
      getPacientes,
      createPaciente,
    }}>
      {children}
    </PacientesContext.Provider>
  );
}
