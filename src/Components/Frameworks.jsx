import React from "react";
import "./Styles/StylesFrameworks.css";

export default function Frameworks() {
  return (
    <>
      <div className="frameworks">
        <h1 className="h1Frame">Ferramentas</h1>
        <p className="PFrameworks">
          Estas são algumas das ferramentas com as quais eu tive mais contato.
        </p>

        <ul className="UlFrameworks">
            <li className="LiFrameworks">React</li>
            <li className="LiFrameworks">C-Sharp</li>
            <li className="LiFrameworks">MySql</li>
            <li className="LiFrameworks">NodeJS</li>
        </ul>
      </div>
    </>
  );
}
