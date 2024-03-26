import { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { PacientesContext } from "../../../contexts/pacientesContext";

const Pacientes = () => {

  const { createPaciente, pacientes } = useContext(PacientesContext);
  const [pacientesDados, setPacientesDados] = useState([]);

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [id, setId] = useState(1);

  const addPaciente = async (e) => {
    try {
      e.preventDefault();

      if (!nome || !idade) return alert('Preencha todos os campos');

      await createPaciente({
        id: id,
        nome: nome,
        idade: idade,
      });
      setId(p => p + 1);
      setNome('');
      setIdade('');
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setPacientesDados(pacientes);
  }, [pacientes]);

  return (
    <Container>
      <h1>Pacientes</h1>
      <form onSubmit={addPaciente}>
        <label htmlFor="">Nome</label>
        <input value={nome} type="text" onChange={(e) => setNome(e.target.value)} />
        <label htmlFor="">Idade</label>
        <input value={idade} type="number" onChange={(e) => setIdade(e.target.value)} />
        <button type="submit">Adicionar</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          {pacientes?.map((paciente, index) => (
            <tr key={index}>
              <td>{paciente.nome}</td>
              <td>{paciente.idade}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </Container>
  );
}

export default Pacientes;