import React from "react";
import "./clients.css";
import {
  apfc,
  magsaysay,
  napocor,
  nmdc,
  psacc,
  vistamarine,
  transoil,
} from "./imports";

const Clients = () => {
  return (
    <div className="golden-chain-clients">
      <p className="clients-text">Trusted by various clients</p>
      <div className="clients">
        <div className="clients-slide">
          <img src={psacc} />
          <img src={apfc} />
          <img src={magsaysay} />
          <img src={napocor} />
          <img src={nmdc} />
          <img src={vistamarine} />
          <img src={transoil} />
        </div>
      </div>
    </div>
  );
};

export default Clients;
