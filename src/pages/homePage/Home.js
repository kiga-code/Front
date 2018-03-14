import React, { Component } from "react";
import "./styles/Home.scss";
import Iphone from "../../images/iphone.png";
import Button from "../../components/button";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-container-left">
          <h1 className="home-container-title">Kiga</h1>
          <p className="home-container-description">
            Uma plataforma de comunicação para o compartilhamento de infomarção
            customizadas sobre o tratamento de doenças. O principal objetivo é
            permitir o acompanhamento da evolução do paciente e auxiliar o
            próprio cliente no auto-gerenciamento.
          </p>
          <Button styleClass="home-container-description-button">
            Saiba Mais
          </Button>
        </div>
        <div className="home-container-right">
          <img src={Iphone} className="home-container-image" alt="kiga" />
        </div>
      </div>
    );
  }
}
export default Home;
