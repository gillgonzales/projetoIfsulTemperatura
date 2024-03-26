import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import userContext from './contexts/userContext.js';
import Dashboard from './pages/argel/Dashboard/index.jsx';
import Relatorios from './pages/argel/Relatorios/index.jsx';
import Pacientes from './pages/argel/Pacientes/index.jsx';
// import './App.css';
// import Logar from './pages/Logar.jsx';
// import Cadastro from './pages/Cadastro.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import CriarUsers from './pages/Dashboard/CriarUsers.jsx';
// import ListarUsers from './pages/Dashboard/ListarUsers.jsx';
// import Calendario from './pages/Dashboard/Calendarios.jsx';

function App() {


  return (
      <Router>
        <main>
          <Routes>
            {/* <Route path="/projetoIfsulTemperatura/" element={<Logar updateUser={updateUser} />} /> */}
            {/* <Route path="/projetoIfsulTemperatura/" element={<Dashboard />} />
            <Route path="/projetoIfsulTemperatura/cadastrar" element={<Cadastro/>} />
            <Route index path="/projetoIfsulTemperatura/dashboard" element={<Dashboard />} />
            <Route path="/projetoIfsulTemperatura/criarUsers" element={<CriarUsers />} />
            <Route path="/projetoIfsulTemperatura/listarUsers" element={<ListarUsers />} />
            <Route path="/projetoIfsulTemperatura/calendario" element={<Calendario />} /> */}
            <Route path="/" element={<Dashboard />}>

              <Route index path="/relatorios" element={<Relatorios />} />
              <Route path="/pacientes" element={<Pacientes />} />
            </Route>

          </Routes>
        </main>
      </Router>
  );
}

export default App;
