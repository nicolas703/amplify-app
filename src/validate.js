import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function ValidarSesion() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hola {user.attributes.email} bienvenido a MasterBikes!</h1>
            <button
              onClick={() => {
                signOut();
              }}
            >
              Cerrar Sesion
            </button>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default ValidarSesion;
