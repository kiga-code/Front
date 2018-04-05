import React, { Component } from "react";
import "./styles/Home.scss";
import Iphone from "../../images/iphoneI.png";
import Button from "../../components/button";
import { connect } from "react-redux";
import Kiga from "../../documents/Kiga.pdf";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    const { hasToken } = this.props;
    // if (hasToken) {
    //   console.log(hasToken)
    //   return <Redirect to={"/dashboard"} />;
    // }
    return (
      <div className="home-container">
        <div className="home-container-left">
          <h1 className="home-container-title">Kiga</h1>
          <p className="home-container-description">
            Uma plataforma de comunicação para o compartilhamento de infomarção
            customizadas sobre o tratamento de doenças. O principal objetivo é
            permitir o acompanhamento da evolução do paciente e auxiliar o
            próprio cliente no auto-gerenciamento. Teremos um suporte ao
            paciente em forma de chatbot para ele acompanhar e analisar um
            pós-diagnóstico.
          </p>
          <a href={Kiga}>
            <Button styleClass="home-container-description-button">
              Saiba Mais
            </Button>
          </a>
        </div>
        <div className="home-container-right">
          <img src={Iphone} className="home-container-image" alt="kiga" />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    hasToken: state.auth.token ? true : false
  };
}
export default connect(mapStateToProps)(Home);
