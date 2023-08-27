import React from "react";
import "./Styles/StylesFindMe.css";

export default function FindMe() {
  return (
    <>
      <div className="findMe">
        <h1>ME ENCONTRE</h1>
        <p>
          Você pode me encontrar por aqui! Sinta se a vontade para me mandar uma
          mensagem...
        </p>
        <ul className="UlFindMe">
          <li className="LiFindMe">
            <p className="PFindMe">GITHUB</p>
            <button>{"visitar >"}</button>
          </li>
         
          <li className="LiFindMe">
            <p className="PFindMe">GITHUB</p>
            <button>{"visitar >"}</button>
          </li>
         
          <li className="LiFindMe">
            <p className="PFindMe">GITHUB</p>
            <button>{"visitar >"}</button>
          </li>
         
        </ul>
      </div>
    </>
  );
}
