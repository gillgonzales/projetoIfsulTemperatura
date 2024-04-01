import { useEffect, useState } from "react"
import { Paciente } from "./styles"
import ReactApexChart from "react-apexcharts";

const PacienteJSX = ({ paciente, handleCheck, setPacientesDados }) => {

  const [medidas, setMedidas] = useState([35, 36, 37, 35, 34]);

  useEffect(() => {
    const idInterval = setInterval(() => {
      const random = Math.floor(Math.random() * 2 + 35);
      const newMedidas = medidas.concat(random);
      setMedidas(newMedidas);
      if (medidas.length > 20) {
        setMedidas(medidas.slice(1));
      }
    }, 1000);
    return () => clearInterval(idInterval);
  }, []);

  return (
    <Paciente key={paciente.id}>
      <h3>{paciente.nome}</h3>
      <h4>{paciente.idade}</h4>
      <input type="checkbox" id={`check-${paciente.id}`} onChange={(e) => handleCheck(paciente, e)} />
      <label htmlFor={`check_${paciente.id}`}>Selecionar paciente</label>

      <ReactApexChart
        options={{
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: medidas
          }
        }}
        series={[{
          name: "series-1",
          data: medidas
        }]}
        type="line"
        width="500"
        height="300"
      />

    </Paciente>
  )
}

export default PacienteJSX