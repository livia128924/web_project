import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "90vh",
        marginTop: 20,
        //alignItems:'flex-start'
      }}
    >
      <div style={{ alignItems: "flex-start" }}>
        <img src={require("../images/element.png")} />
      </div>

      <div
        style={{
          height: "auto",
          paddingLeft: 20,
          width: "auto",
          alignItems: "center",
        }}
      >
        <div style={{ justifyContent: "center" }}>
          <h1 style={{ width: "100%", fontSize: "xxx-large", marginTop: 150 }}>
            Agendamento facil e rapido
          </h1>
          <p style={{ width: "50%", marginTop: 50 }}>
            {" "}
            Para mehor experiecia com cuidados de ficioterapia trabalhamos com
            consultas online e precenciais, acessivel para todos.
          </p>
          <div style={{ marginTop: 20 }}>
            <Button>Consultar</Button>
          </div>
        </div>
      </div>

      <div>
        <img src={require("../images/illustration.png")} />
      </div>
    </div>
  );
};

const Button = styled.button`
  background-color: #458ff6;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  border: none;
`;
export default Home;
