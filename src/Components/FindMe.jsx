import React from "react";
import "./Styles/StylesFindMe.css";

export default function FindMe() {
  return (
    <>
      <div className="findMe">
        <h1>ME ENCONTRE</h1>
        <p className="PVindMeDescription">
          Você pode me encontrar por aqui! Sinta se a vontade para me mandar uma
          mensagem...
        </p>
        <ul className="UlFindMe">
          <li className="LiFindMe">
            <p className="PFindMe">GitHub</p>
            <button>{"visitar >"}</button>
          </li>
         
          <li className="LiFindMe">
            <p className="PFindMe">Linkedin</p>
            <button>{"visitar >"}</button>
          </li>
         
          <li className="LiFindMe">
            <p className="PFindMe">Instagram</p>
            <button>{"visitar >"}</button>
          </li>
        </ul>
       
      </div>
    </>
  );
}
