import { useContext, useEffect, useState } from "react";
import { Container, Paciente } from "./styles";
import ReactApexChart from "react-apexcharts";
import { PacientesContext } from "../../../contexts/pacientesContext";
import PacienteJSX from "./paciente";

const Relatorios = () => {

  const { pacientes } = useContext(PacientesContext);
  const [pacientesDados, setPacientesDados] = useState([]);
  const [graficos, setGraficos] = useState([]);


  useEffect(() => {
    const dados = pacientes.map(paciente => {
      return {
        id: paciente.id,
        nome: paciente.nome,
        idade: paciente.idade,
        medidas: []
      }
    });
    setPacientesDados(dados);
  }, []);

  const handleCheck = (paciente, e) => {
    if (e.target.checked)
      setGraficos([...graficos, paciente]);
    else
      setGraficos(graficos.filter(p => p.id !== paciente.id));
  }

  return (
    <Container>
      <h1>Relatórios</h1>
      {pacientesDados?.map((paciente) => (
        <PacienteJSX paciente={paciente} handleCheck={handleCheck} setPacientesDados={setPacientesDados} />
      ))}

      {graficos?.map((paciente) => (
        <div key={paciente.id}>
          <h3>{paciente.nome}</h3>
          <ReactApexChart
            options={{
              chart: {
                id: "basic-bar"
              },
            }}
            series={[
              {
                name: "Medidas",
                data: paciente.medidas
              }
            ]}
            type="line"
            width={500}
            height={320}
          />
        </div>
      ))}



    </Container>
  );
}

export default Relatorios;