import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Content, Navbar } from "./styles";
import GlobalStyle from "../../../components/global";
import logo from "../../../assets/logo.png";

const Dashboard = () => {

  const menuRef = useRef();
  const [menu, setMenu] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Container menu={!menu} ref={menuRef}>
        <Navbar>
          <label className="burger" htmlFor="burger">
            <input type="checkbox" onChange={() => setMenu(!menu)} id="burger" />
            <span></span>
            <span></span>
            <span></span>
          </label>
          <figure>
            <img src={logo} alt="Logo do sistema" />
          </figure>
          <nav>
            <ul>
              <li>
                <Link to="/pacientes">
                  <img width={25} src="https://img.icons8.com/ios/50/000000/user.png" alt="Usuários" />
                  <span className="span">Pacientes</span>
                </Link>
              </li>
              <li>
                <Link to="/relatorios">
                  <img width={25} src="https://img.icons8.com/ios/50/000000/graph.png" alt="Gráficos" />
                  <span className="span">Gráficos</span>
                </Link>
              </li>
            </ul>
          </nav>

        </Navbar>
        <Content>
          <Outlet />
        </Content>
      </Container >
    </>
  );
}

export default Dashboard;
